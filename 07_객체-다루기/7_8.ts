const model = {
  isLogin: false,
  isValidToken: false,
};

function setLogin(bool: boolean) {
  model.isLogin = bool;
}

function setValidToken(bool: boolean) {
  model.isValidToken = bool;
}

// 직접 접근 지양하기
function login() {
  setLogin(true);
  setValidToken(true);
}

const someElement = document.querySelector(".element");

someElement.addEventListener("click", login);
