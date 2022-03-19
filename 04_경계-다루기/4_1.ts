{
  function genRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // for (let i = 0; i < 10; i++) {
  //   console.log(genRandomNumber(1, 20));
  // }

  function isAdult(age: number) {
    // 최소, 최대값 (포함 되는지 vs 안되는지)
    return age >= 20;
  }
}
