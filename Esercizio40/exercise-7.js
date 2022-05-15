class Person {
  //#firstName;
  //#lastName;
  //#age;
  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }
  get firstName() {
    return this.#firstName;
  }
  set firstName(value) {
    this.#firstName = value;
  }
  get lastName() {
    return this.#lastName;
  }
  set lastName(value) {
    this.#lastName = value;
  }
  get age() {
    return this.#age;
  }
  set age(value) {
    this.#age = value;
  }
  get fullName() {
    return this.#firstName + " " + this.#lastName;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
