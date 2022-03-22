const orders = ["First", "Second", "Third"];

const [s1, , s3] = orders;
console.log(s1, s3);

const { 0: str1, 2: str3 } = orders;
console.log(str1, str3);
