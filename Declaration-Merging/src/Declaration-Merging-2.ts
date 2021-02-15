/////
namespace MyNamespace {
  export const x: number = 10;
  export interface SomeInterface {
    y: number;
  }
}
/////

namespace MyNamespace {
  export const getX = () => x;
  export interface SomeInterface {
    x: number;
  }
}

MyNamespace.x;
MyNamespace.getX();

const someInterface: MyNamespace.SomeInterface = {
  x: 1,
  y: 2
};
