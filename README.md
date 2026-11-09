# Next Level Web Development - Assignment 1

A collection of TypeScript problem-solving solutions and technical guides exploring core TypeScript features, including Generics, Type Narrowing, Object-Oriented Programming (OOP), and Asynchronous operations.

## 📌 Project Overview

This repository demonstrates practical and theoretical TypeScript concepts. It is split into two primary components:

1. **Practical Solutions (`solutions.ts`)**: Implementation of typed functions and classes addressing common programming patterns and challenges.

2. **Technical Articles**: Explanations and examples covering fundamental TypeScript concepts (`generics.md` and `type-narrowing.md`).

## 📂 Project Structure

```text
.
├── generics.md          # Technical guide on Generics in TypeScript
├── type-narrowing.md    # Technical guide on Type Narrowing & Control Flow Analysis
├── solutions.ts         # TypeScript implementations
└── README.md            # Project overview and documentation
```

## 🚀 Implemented Solutions

The [`solutions.ts`](./solutions.ts) file includes implementations covering key TypeScript paradigms:

| Function / Class       | Description                                                                      | Key Concept                       |
| :--------------------- | :------------------------------------------------------------------------------- | :-------------------------------- |
| `multiplyValue`        | Multiplies a number by an optional multiplier (defaults to 2).                   | Optional Parameters               |
| `processInput`         | Processes input differently based on whether it is a string, number, or boolean. | Union Types & `typeof` Guards     |
| `formatCoordinate`     | Formats a tuple into a coordinate string.                                        | Readonly Tuples                   |
| `concatenateArrays`    | Merges multiple arrays into a single array.                                      | Generic Rest Parameters (`<T>`)   |
| `getPopularCourses`    | Filters published courses exceeding a minimum student threshold.                 | Custom Interfaces & Filtering     |
| `pluckValues`          | Extracts values for a given property key across an array of objects.             | Generic Constraints & `keyof`     |
| `Employee` & `Manager` | Demonstrates class inheritance with encapsulation (`protected`, `private`).      | Object-Oriented Programming (OOP) |
| `validateAgeAsync`     | Validates age asynchronously using Promises and handles errors cleanly.          | Async/Await & `instanceof Error`  |

## 📝 Articles Included

- **[Generics in TypeScript](./generics.md)**: Explains the importance of writing reusable and type-safe code using type variables and generic Promises (`Promise<T>`).

- **[Type Narrowing in TypeScript](./type-narrowing.md)**: Covers TypeScript's control flow analysis and practical narrowing mechanisms such as `typeof`, `instanceof` and the `in` operator.
