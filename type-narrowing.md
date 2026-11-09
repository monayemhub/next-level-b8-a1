# Type Narrowing in TypeScript

Type narrowing is TypeScript’s process of **refining** a variable’s type from a broad one to a more specific one inside a code block. It lets TypeScript compiler follow the control flow and update what it knows about the type. It also makes auto-completion more specific.

## How It Works

TypeScript traverses the code and tracks the type at each point. Steps:

1. Start with the declared type (for example, `string | number | boolean`).
2. At each branch (`if`, `switch`, `&&`, `||`, `?:`), apply the check’s condition.
3. Narrow the type in the true branch, and leave the complement in the false branch right next.
4. At the very last branch where there is no type to check, the type becomes `never`.

## Narrowing Techniques

1. `typeof` guards

   ```typescript
   const myFunction = (value: string | number | boolean) => {
     // value.<commonStuff>

     if (typeof value === 'string') {
       return value.toLowerCase(); // Only string properties and methods
     }

     if (typeof value === 'number') {
       return value.toString(); // Only number properties and methods
     }

     if (typeof value === 'boolean') {
       return Number(value); // only returns 0 or 1
     }

     return value; // never: No return possible
   };
   ```

2. `instanceof` operator

   ```typescript
   const log = (date: Date | string) => {
     if (date instanceof Date) {
       return date.toISOString(); // Only Date properties and methods
     }

     return date.toUpperCase(); // Only string properties and methods
   };
   ```

3. `in` operator

   ```typescript
   type Fish = { swim: () => void };
   type Bird = { fly: () => void };

   const move = (pet: Fish | Bird) => {
     if ('swim' in pet) {
       pet.swim(); // Fish
     } else {
       pet.fly(); // Bird
     }
   };
   ```

---

**Pitfall:** Narrowing loses in callbacks
