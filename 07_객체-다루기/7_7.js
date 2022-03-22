{
  const person = {
    name: "tony",
  };

  person.hasOwnProperty("name");

  var foo = {
    hasOwnProperty: function () {
      return "hasOwnProperty";
    },
    bar: "string",
  };

  console.log(foo.hasOwnProperty("bar"));

  console.log(Object.prototype.hasOwnProperty.call(foo, "bar"));

  function hasOwnProp(targetObj, targetProp) {
    return Object.prototype.hasOwnProperty.call(targetObj, targetProp);
  }
}
