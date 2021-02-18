// Part 1
function someFn(myArgument: number | string | boolean) {
  if (typeof myArgument === 'string') {
    let x = myArgument.toLocaleUpperCase();
  } else if (typeof myArgument === 'number') {
    myArgument.toFixed();
  } else {
    myArgument;
  }
}

// Part 2
interface Dog {
  bark(): void;
  walk(): void;
}

interface Cat {
  meow(): void;
  walk(): void;
}

function isDog(someObj: Dog | Cat): someObj is Dog {
  return typeof (<Dog>someObj).bark !== 'undefined';
}

function callMyPet(pet: Dog | Cat) {
  pet.walk();
  if (isDog(pet)) {
    pet.bark();
  } else {
    pet.meow();
  }
}

// Part 3
class Foo {
  foo: number = 0;
  commonProp: string = '';
}

class Bar {
  bar: number = 0;
  commonProp: string = '';
}

function fooBarFunction(obj: Foo | Bar) {
  if (obj instanceof Foo) {
    obj.foo;
  } else {
    obj.bar;
  }
}
