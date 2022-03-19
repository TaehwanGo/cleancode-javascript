# 3. 타입 다루기

## 3-1. 타입 검사

### typeof

- typeof `클래스 생성자 함수` => 'function'
- typeof `클래스 인스턴스` => 'object'
- typeof null === 'object'

### instanceof

- 객체의 프로토타입 체인을 검사

- typeof, instanceof 둘다 잘 안쓰이긴 함

## 3-2. undefined & null

- 값이 없는 것을 표현
  - undefined : NaN : 정의되지 않음
  - null : 0 : 명시적으로 없음

## 3-3. eqeq(==) 줄이기

- DOM에서 숫자를 가져올 때
  - element.valueAsNumber 로 가져올 수도 있음
- ESLint를 사용하자

## 3-3. 형변환 주의하기

- 자바스크립트 타입 테이블
  - https://dorey.github.io/JavaScript-Equality-Table/ㄴ

## 3-4. isNaN

- 자바스크립트는 부동 소수점
- isNaN은 햇갈리니 사용하지말자
- 사용할거면 Number.isNaN 을 사용하자
