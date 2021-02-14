// Boolean
let b: boolean = true;

// Number
let num: number = 1 + 0b1 + 0o1 + 0x1;

// String
const hello: string = 'Hello';
const world: string = 'World';
const helloWorld = `
  ${hello}
  ${world}
`;

// Null and Undefined
let n: null = null;
let u: undefined = undefined;

//let someNumber: number = null;
let someNumber: number = 0;

function uppercaseFirstLetter(str: string | null) {
  if (str) {
    return str[0].toUpperCase() + str.substr(1);
  }
}

console.log(uppercaseFirstLetter('hello'));
uppercaseFirstLetter(null);

// Object
type primitiveTypes = boolean | number | string | symbol | null | undefined;
const myObj: object = new Map();

// Void
function log(message: string): void {
  console.log(message);
  //return 'a string';
}

// Array
let array1: string[] = ['x', 'y'];
let array2: Array<string> = array1;

// Tuple
let tuple: [string, number] = ['str', 1];

// Enum
enum Color {
  Red = 'r',
  Green = 'g',
  Blue = 'b'
}

let myFavoriteColor: Color = Color.Blue;
console.log(Color.Red, Color.Green, Color.Blue);
//console.log(Color['red']); // Property 'red' does not exist on type 'typeof Color'. Did you mean 'Red'?

// Any
let ANY: any;
ANY = 'a string';
ANY = 1;
ANY = true;

// Type Assertions
const email =
  typeof document !== 'undefined' ? document.getElementById('email') : null;

if (email) {
  email.addEventListener('change', e => {
    const input = <HTMLInputElement>e.currentTarget;
    console.log(input.value);
  });
}
