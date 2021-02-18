function someFunction() {
  return 10;
}

namespace someFunction {
  export const someProperty = 10;
}

someFunction.someProperty === 10;
