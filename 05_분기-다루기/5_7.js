// Early return
{
  // before
  function loginService(isLogin, user) {
    // 1. 로그인 여부 확인
    if (!isLogin) {
      // 2. 토큰 존재 확인
      if (checkToken()) {
        // 3. 이미 가입된 유저인지 확인 -> 만약 가입이 안되어 있다면 가입 페이지로 이동
        if (!user.nickName) {
          return registerUser(user);
        } else {
          refreshToken();
          return "로그인 성공";
        }
      } else {
        throw new Error("No Token");
      }
    }
  }

  // after
  function login() {
    refreshToken();
    return "로그인 성공";
  }
  function loginService(isLogin, user) {
    // 1. 로그인 여부 확인
    if (isLogin) {
      return;
    }
    // 2. 토큰 존재 확인
    if (!checkToken()) {
      throw new Error("No Token");
    }
    // 3. 이미 가입된 유저인지 확인 -> 만약 가입이 안되어 있다면 가입 페이지로 이동
    if (!user.nickName) {
      return registerUser(user);
    }
    login();
  }
}
