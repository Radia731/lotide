# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @Radia731/lotide`

**Require it:**

`const _ = require('@Radia731/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `countLetters.js`: This function takes a sentence and return a count of each of the letters in that sentence.
- `countOnly.js`: This function takes in a collection of items and returns count for a specific subset of thoe items.
- `letterPosition.`: This function returns all the indices (zero-based positions) in the string where each character is found.
- `findKeyByValue(..)`: This function search for a key on an object where its value matches a given value.
- `findKey(...)`: This function should scan the object and return the first key for \* \* which the callback returns a truthy value.
- `head(...)`: This function is to retrieve the first element from the array
- `map(...)`: This function returns a new array based on the results of the callback function.
- `middle(...)`: This function returns the middle-most element(s) of the given array.
- `tail(...)`: This function returns the "tail" of an array: everything except for the first item (head) of the provided array.
- `takeUntil(...)`: keeps collecting items from a provided array until the callback provided returns a truthy value.
- `without(...)`: return a subset of a given array, removing unwanted elements.
