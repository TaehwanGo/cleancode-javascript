{
  const firstName = "Taehwan";
  const lastName = "Go";

  const person = {
    firstName,
    lastName,
    getFullName() {
      return this.firstName + " " + this.lastName;
    },
    // getFullName: () => { // arrow function은 this binding이 되지 않음
    //   this.firstName = firstName; // arrow function의 this는 자기 자신안에 있는 this 객체들만을 의미
    //   this.lastName = lastName;
    //   return this.firstName + " " + this.lastName;
    // },
  };

  console.log(person.getFullName());
}
