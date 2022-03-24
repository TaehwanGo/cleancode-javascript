{
  function* gen() {
    // yield () => // 화살표함수는 yield 키워드와 같이 사용할 수 없음
    yield function () {};
  }
}
