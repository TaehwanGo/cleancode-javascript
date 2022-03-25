{
  function add(num1) {
    return function (num2) {
      return function (calculateFn) {
        return calculateFn(num1, num2);
      };
    };
  }

  function sum(num1, num2) {
    return num1 + num2;
  }

  const addOne = add(1);
  const addTwo = addOne(2); // closure 성질로 인해 addOne에서 입력한 1을 기억
  const sumAdd = addTwo(sum); // closure 성질로 인해 addOne, addTwo에서 입력한 1, 2를 기억한 것을 콜백함수 sum에 의해 계산 됨 => 3
  // console.log(sumAdd); // 3
}

{
  const arr = [1, 2, 3, "a", "b", "c"];

  function isTypeOf(type) {
    return function (value) {
      return typeof value === type;
    };
  }

  const isNumber = isTypeOf("number");

  arr.filter(isNumber);
  console.log(arr.filter(isTypeOf("number")));
}
