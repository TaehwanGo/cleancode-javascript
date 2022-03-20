// 문(state)를 값의 자리에 넣는 경우 -> 에러 발생
<div id={if (condition) { return 'msg' }}>Hello world!</div> // Error

React.createElement('div', {id: if (condition) { return 'msg' }}, 'Hello world!'); // Error

// 식
<div id={condition ? 'meg' : null}>Hello world!</div> // ok