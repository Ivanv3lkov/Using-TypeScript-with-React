enum Vegetables {
  Tomato = 'tomato',
  Onion = 'onion'
}

namespace Vegetables {
  export function makeSalad() {
    return Vegetables.Tomato + Vegetables.Onion;
  }
}

const salad = Vegetables.makeSalad();
