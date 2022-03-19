{
  var a = "a";

  {
    var a = "aa";
    console.log(a); // aa
  }

  console.log(a); // aa

  const b = "b";

  {
    const b = "bb";
    console.log(b); // bb
  }

  console.log(b); // b
}
