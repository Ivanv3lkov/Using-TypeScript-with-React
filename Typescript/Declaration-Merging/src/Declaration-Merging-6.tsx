import * as React from 'react';
import { renderToString } from 'react-dom/server';

declare module 'react' {
  interface Component {
    helloWorld(): string;
  }
  export function foo(): void;
}

React.Component.prototype.helloWorld = function() {
  return 'Hello World!';
};

class MyComponent extends React.Component {
  render() {
    return <div>{this.helloWorld()}</div>;
  }
}

console.log(renderToString(<MyComponent />));
