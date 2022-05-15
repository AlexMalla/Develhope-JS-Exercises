const person = {
  get firstName() {
    return this._firstName;
  },
  get lastName() {
    return this._lastName;
  },
  set firstName(firstName) {
    this._firstName = firstName;
  },
  set lastName(lastName) {
    this._lastName = lastName;
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

let john = Object.create(person);
let simon = Object.create(person);

john.firstName = "John";
john.lastName = "Doe";

console.log(john.fullName()); // John Doe
//console.log(simon.fullName()); // Simon Collins
