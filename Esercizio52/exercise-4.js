const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

//const json = JSON.stringify(person);

let filter = Object.fromEntries(
  Object.entries(person).filter((item) => typeof item[1] === "number")
);

const json = JSON.stringify(filter);
console.log(json); // Should return: { id: 1, age: 25 }
