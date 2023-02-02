// ES10 deconstructuring

let listA = ["40", "10", "50", "2", "10"];
let listB = ["40", "10", "50", "2", "10"];

let [a, , , ...lastTwo] = listA;

console.log(listA, "\n");

console.log(a, "\n");

console.log(lastTwo, "\n");

alphabet = ["a", "b", "c"];

twoList = [...listA, ...alphabet];

// same as

twooList = listB.concat(alphabet);

console.log("first two: ", twoList, "\n");

console.log("second two: ", twooList, "\n");

// opposed to

function sumAndMultiply(a, b) {
  return [a + b, a * b];
}

const array = sumAndMultiply(2, 3);

console.log(array, "\n");

// we can go

const [sum, multiply] = sumAndMultiply(2, 3);

console.log(sum, "\n");

console.log(multiply, "\n");

const Obj = {
  name: "Jason",
  address: {
    street: "5555 Bic Street",
    city: "Memphis",
  },
};

const { name, address } = Obj;

console.log(Obj, "\n");

// variables and default values (use = sign), firstName is Hi if default is needed

const { name: firstName = "Hi", highSchool = "Blue Mountain" } = Obj;

console.log(firstName, "\n");

console.log(highSchool, "\n");

// nested values

const {
  address: { city },
} = Obj;

console.log(city);
