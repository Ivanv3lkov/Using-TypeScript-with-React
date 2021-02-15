// Interfaces
interface Profile {
  readonly name: string;
  age?: number;
}

let profile: Profile = {
  name: 'John'
};

// Index Signature
interface A {
  someProp: string;
  [key: string]: number | string;
}

const a: A = { someProp: 'some prop' };
a.x = 1;
a.y = 2;

// Call Signature
interface Sum {
  (a: number, b: number): number;
  prop1: string;
}

const sum: Sum = (a, b) => a + b;
sum.prop1 = 'some prop';

// Extending Interfaces
interface Parent {
  x: string;
}

interface Parent2 {
  y: string;
}

interface Parent3 {
  z: string;
}

interface Child extends Parent, Parent2, Parent3 {}

let child: Child = { x: 'some prop', y: 'y prop', z: 'z prop' };
