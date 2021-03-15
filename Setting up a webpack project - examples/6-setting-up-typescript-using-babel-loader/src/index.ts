export function log(str: string) {
  console.log(str);
}

log('Hello World');

class A {
  greeting = 'Hello World';
}

console.log(new A().greeting);
