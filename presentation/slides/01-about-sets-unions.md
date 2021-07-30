---
title: Fun with conditional types
marp: true
theme: kubi
footer: '![techatbloomberg.com](./media/techatbloomberg.png) © 2021 Bloomberg Finance L.P. All rights reserved. ![techatbloomberg.com](./media/bloomberg.png)'
---

### Sets And Types

* Types are sets:
    * `{ foo: number }` - the set of all values that are objects and have a `foo` property of type `number`
    * `{ bar: number }` - the set of all values that are objects and have a `bar` property of type `number`
    * `number` - the set of all values that are floating point numbers
    * `string`- the set of all values that are strings
    * `never`-  the empty set, no value can inhabit this set
    * `unknown` - the set of all possible values 

----

### Set operations can be applied to types

* Unions:
    * `{ foo: number } | { bar: number }` the set of all objects that either
        * have a `foo` property of type `number`
        * have a `bar` property of type `number`
    * `string | number` the set of values that are either numbers or strings 

---

### Set operations can be applied to types

* Intersections:
    * `{ foo: number } & { bar: number }` the set of all objects that at the same time:
        * have a `foo` property of type `number`
        * have a `bar` property of type `number`
    * `number & string` the set of all values that are both `number` and `string`
        * This is the empty set, so it will reduce to `never`

---

### Unions - Representing options

<question>

How can I represent an object that is either a `Engineer` or a `Doctor`

</question>

<answer>

Use a union.

</answer>

---

### Type Guards - Narrowing unions

<question>

Why can't I access some union properties?

</question>

<answer>

You can only safely access common properties. You need to narrow the type of a union.

</answer>

--- 

### Type Guards - Narrowing unions

* Syntactic constructs that help us narrow a union.
* To narrow the `value` variable:
    * `'property' in value`  - the `in` type guard
    
---