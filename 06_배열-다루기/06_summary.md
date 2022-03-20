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

## 6-5. 불변성

## 6-6. for문 배열 고차함수로 리팩터링

## 6-7. 배열 메서드 체이닝 활용하기

## 6-8. map vs forEach

## 6-9. continue vs break
