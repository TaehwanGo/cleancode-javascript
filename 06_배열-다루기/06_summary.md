# 6. 배열 다루기

## 6-1. Javascript 배열은 객체다

```js
typeof arr; // Object
arr instanceof Array;

// best
Array.isArray(arr);
```

## 6-2. Array.length

- Array의 마지막 인덱스

## 6-3. 배열 요소에 접근하기

- index로 접근할 경우 그게 뭔지 알 수 없음
- string.split(' ') 메서드를 사용할 때 많이 사용
- index로 접근하기 보단 구조분해할당을 사용하자
  - react의 useState와 비슷
- lodash의 \_.head([1, 2, 3]) => 1

## 6-4. 유사 배열 객체

```js
const obj = {
  0: "0",
  1: "a",
  2: "b",
  length: 3,
};

const arr = Array.from(obj); // 유사배열 객체만 변환 가능, 아닐 경우 [] - 빈배열 - 이 나옴
console.log(arr);
```

- Web API의 NodeList도 유사배열
- arguments도 유사배열

## 6-5. 불변성

- 배열을 복사한다

  > javascript copy array or array clone 등을 구글로 검색

- 새로운 배열을 반환하는 메서드들을 활용한다
  > map, filter, slice 등

## 6-6. for문 배열 고차함수로 리팩터링

## 6-7. 배열 메서드 체이닝 활용하기

```js
const price = ["2000", "1000", "a,", "3000", "5000", "4000"];

const stringToNumber = (str: string) => Number(str);
const isOverOneThousand = (price: number) => price > 1000;
const ascendingList = (a: number, b: number) => a - b;
const suffixWon = (price: number) => `${price}원`;
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
```

## 6-8. map vs forEach

## 6-9. continue vs break
