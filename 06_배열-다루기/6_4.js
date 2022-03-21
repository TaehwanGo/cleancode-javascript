{
  const obj = {
    0: "0",
    1: "a",
    2: "b",
    length: 3,
  };

  const arr = Array.from(obj); // 유사배열 객체만 변환 가능, 아닐 경우 [] - 빈배열 - 이 나옴
  console.log(arr);
}
