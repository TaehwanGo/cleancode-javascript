{
  // interface DocumentAndElementEventHandlers {
  //   // ...
  //   addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: DocumentAndElementEventHandlers, ev: DocumentAndElementEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
  //   addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
  //   removeEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: DocumentAndElementEventHandlers, ev: DocumentAndElementEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
  //   removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
  // }

  // 콜백 함수 - 이벤트 리스너 상상도
  Document.prototype.addEventListener = function (eventType, cbFunc) {
    if (eventType === "click") {
      const clickEventObject = {
        target: {},
      };
      cbFunc(clickEventObject);
      // ...
    }
    // ...
  };
}

{
  // before
  function register() {
    const isConfirm = confirm("회원가입");

    if (isConfirm) {
      redirectUserInfoPage();
    }
  }
  function login() {
    const isConfirm = confirm("로그인");

    if (isConfirm) {
      redirectIndexPage();
    }
  }

  // after
  function confirmModal(message, cbFunc = Error) {
    const isConfirm = confirm(message);

    if (isConfirm && cbFunc) {
      cbFunc();
    }
  }

  function register() {
    confirmModal("회원가입", redirectUserInfoPage);
  }

  function login() {
    confirmModal("로그인", redirectIndexPage);
  }
}
