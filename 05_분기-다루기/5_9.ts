// 5-9 Default case 고려하기
{
  // 예제 1
  function sum(x: number = 0, y: number = 0) {
    return x + y;
  }

  console.log(sum()); // 0

  // 예제 2
  function registerDay(userInputDay: string) {
    switch (userInputDay) {
      case "Mon":
        return "월요일";
      case "Tue":
        return "화요일";
      // ...
      default:
        throw new Error("입력받은 요일이 없습니다");
    }
  }
}
