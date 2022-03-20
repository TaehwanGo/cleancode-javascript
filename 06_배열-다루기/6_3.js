// 배열 요소에 접근하기
{
  // case 1
  const array = [1, 2, 3];

  // before
  function operateTime(input, operators, is) {
    input[0].split("").forEach((num) => {
      cy.get(".digit").contains(num).click();
    });

    input[1].split("").forEach((num) => {
      cy.get(".digit").contains(num).click();
    });
  }

  // after
  // 함수에서 받을 때 부터 구조분해할당을 하면 더 좋다
  function operateTime([firstInput, secondInput], operators, is) {
    firstInput.split("").forEach((num) => {
      cy.get(".digit").contains(num).click();
    });

    secondInput.split("").forEach((num) => {
      cy.get(".digit").contains(num).click();
    });
  }
}

{
  // case 2

  // before
  function clickGroupButton() {
    const confirmButton = document.getElementsByTagName("button")[0];
    const cancelButton = document.getElementsByTagName("button")[1];
    const resetButton = document.getElementsByTagName("button")[2];

    // some code ...
  }

  // after
  function clickGroupButton() {
    const [confirmButton, cancelButton, resetButton] =
      document.getElementsByTagName("button");

    // some code ...
  }
}

{
  // case 3.
  function formatDate(targetDate) {
    const [date] = targetDate.toISOString().split("T");
    const [year, month, day] = date.split("-");
    return `${year}년 ${month}월 ${day}일`;
  }
}

{
  function head(arr) {
    return arr[0] ?? "";
  }
}
