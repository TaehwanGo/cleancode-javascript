{
  class Parent {
    parentMethod() {
      console.log("parentMethod");
    }
    parentMethodArrow = () => {
      console.log("parentMethodArrow");
    };

    overrideMethod = () => {
      console.log("Parent overrideMethod");
    };
  }

  class Child extends Parent {
    childMethod() {
      super.parentMethod();
    }

    callParentArrow() {
      super.parentMethodArrow();
    }

    overrideMethod() {
      console.log("Child overrideMethod");
    }
  }

  const aClass = new Child();
  // aClass.childMethod();
  // aClass.parentMethodArrow(); // 부모의 arrow function 호출은 문제 없음 그러나
  // 자신 메서드에서 부모의 arrow function을 호출하고 추가작업을 하려고 할 때 생성자 안으로 들어가버린 부모의 메서드는 찾을 수가 없음
  // aClass.callParentArrow(); // (intermediate value).parentMethodArrow is not a function
  aClass.overrideMethod(); // overriding을 해도 부모의 메서드가 호출 됨
  // overriding을 하려면 일반 함수로 만들어야 함
}
