# 4. 경계 다루기

## 4-1. min - max

```ts
function genRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 상수
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;
```

- 상수는 숫자를 사용하기보단 명시적인 상수 식별자를 사용하자

```ts
function isAdult(age: number) {
  // 최소, 최대값 (포함 되는지 vs 안되는지)
  return age >= 20;
}
```

- 최대값 등의 경계 - 포함하는지 포함하지 않는지에 대한 컨벤션을 정할 필요가 있다.

### 경계 다루기 (min - max)

1. 최소값과 최대값을 다룬다
2. 최소값과 최대값 포함 여부를 결정해야 한다
3. 혹은 네이밍에 최소값과 최대값 포함 여부를 표현한다

- MAX_NUMBER -> MAX_IN_NUMBER

## 4-2. begin - end

- 시작과 끝이 동일하지 않은 경우 - 숙박
  - 체크인 : begin
  - 체크아웃 : 비어있음(end)

## 4-3. first - last

- 포함된 양 끝을 의미
- ~ 부터 ~ 까지

## 4-4. prefix - suffix

## 4-5. 매개변수의 순서가 경계다
