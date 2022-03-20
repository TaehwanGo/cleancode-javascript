// truthy
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
console.log(!!true);
console.log(!!{});
console.log(!![]);
console.log(!!31);
console.log(!!"0");
console.log(!!"false");
console.log(!!-42);
console.log(!!12n);
console.log(!!3.14);
console.log(!!Infinity);

// falsy
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy
console.log(!!false);
console.log(!!null);
console.log(!!undefined);
console.log(!!0);
console.log(!!-0);
console.log(!!0n);
console.log(!!NaN);
console.log(!!"");
