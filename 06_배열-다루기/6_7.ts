{
  /**
   * 1. 원화 표기
   * 2. 1000원 초과 리스트만 출력
   * 3. 가격 순 정렬
   */

  const price = ["2000", "1000", "a,", "3000", "5000", "4000"];

  const stringToNumber = (str: string) => Number(str);
  const isOverOneThousand = (price: number) => price > 1000;
  const ascendingList = (a: number, b: number) => a - b;
  const suffixWon = (price: number) => `${price}원`;
  console.log(NaN > 1000); // 여기에서 'a' 같은 것이 걸러지는 구나
  function getWonPrice(priceList: string[]) {
    return (
      priceList
        .map(stringToNumber)
        // .filter((num) => !Number.isNaN(num))
        .filter(isOverOneThousand) // 여기에서 'a' 같은 것이 걸러지는 구나
        .sort(ascendingList)
        .map(suffixWon)
    );
  }

  console.log(getWonPrice(price));
  const aString = "a";
  console.log(Number(aString)); // NaN
  console.log(!Number.isNaN(Number(aString))); // filter에 들어갈 메소드
}
