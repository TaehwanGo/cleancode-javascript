function createElement(type: string, height: number, width: number) {
  const element = document.createElement(type ?? "div");

  // element.style.height = String(height || 10) + "px"; // 0을 넣고 싶어도 넣을 수 없음
  element.style.height = String(height ?? 10) + "px";
  element.style.width = String(width ?? 10) + "px";

  return element;
}

const el = createElement("div", 0, 0);

console.log(el);
