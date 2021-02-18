interface IA {
  a: number;
}

interface IB {
  b: number;
}

interface IC {
  c: number;
}

function X(obj: IA & IB & IC) {
  return obj.a + obj.b + obj.c;
}

function combine<ObjA extends object, ObjB extends object>(
  objA: ObjA,
  objB: ObjB
): ObjA & ObjB {
  return { ...objA, ...objB };
}

const objA = { a: 1 };
const objB = { b: 2 };
const resultObj = combine(objA, objB);
