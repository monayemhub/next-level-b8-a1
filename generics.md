# Generics in TypeScript

Generics allows us to write **reusable code** that works with many types while preserving type checking. The type becomes a parameter, like a function argument, at the type level.

## How It Works

#### Problems without Generics

```typescript
const myFunction = (value: any) => {
  return value;
};

let result = myFunction('hello'); // result is `any` now, so type safety is lost
```

#### Solution with Generics

```typescript
const myFunction = <T>(value: T) => {
  return value;
};

let a = myFunction('hello'); // a: string, a narrower type 'hello' returned
let b = myFunction(42); // b: number, a narrower type 42 returned

// Both a and b are now type-safe
```

Generic T is working here as a type variable, letting myFunction stay type-safe while working with multiple types, without falling back to `any`.

## Asynchronous Promise<T> Responses

Generics let us describe what a Promise will resolve to, so TypeScript can track that type through await or .then() instead of falling back to `any`.

Let's take an example.

```typescript
interface User {
  id: number;
  name: string;
}

interface Product {
  id: number;
  price: number;
}

const fetchData = async <T>(url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const data = await (response.json() as Promise<T>); // Generic T is helping assert the type here, preventing 'any' fallback

  return data;
};

const user = await fetchData<User>('/api/user/1');
console.log(user.name); // User properties and methods here

const product = await fetchData<Product>('/api/product/abc');
console.log(product.price); // Product properties and methods here

user.price; // Error: 'price' does not exist on type 'User'
```

A single fetchData function can now work for multiple data types.
