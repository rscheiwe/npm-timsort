# timSort-node: Node.js Package for Python's Sorting Algorithm, Timsort

[![npm package](https://nodei.co/npm/timsort-node.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/timsort-node)

[![npm version](https://badge.fury.io/js/timsort-node.svg)](https://badge.fury.io/js/timsort-node)

Timsort is Python's default sorting algorithm (`.sort()`), later adopted by Java in SE 7. It was designed by Tim Peters (of, "The Zen of Python") "outside" of the laboratory in order to approach data more likely to be encountered in real-world scenarios. Timsort is stable and as fast as merge sort, with an average big-O of `O(n log n)`. The original algorithm was written by Peters in C and can be found [here](http://svn.python.org/projects/python/trunk/Objects/listobject.c).

## Installing

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

The primary functions may be found in `index.js`.

Install package with:
```
npm install --save timsort-node
```
In `example.js`, a few examples are shown. You may also require `arrayCreator.js`, which creates a randomized array based on two params, `length` and `maxNum`. (The latter defines how high you want the numbers to go).

To run:
```javascript
const timSort = require('timsort-node')
let array = [4, 6, 9, 2] //or any array
timSort(array) //results in: [2, 4, 6, 9]
```
For randomizing:
```javascript
let arrayRandom = randomArray(10000, 10000)
timSort(arrayRandom)
...
```

## Running Tests

`index.test.js` provides three tests for benchmarking purposes, and personalized tests may be generated. Simply follow the sytax, making sure to use `assert.deepEqual` and the `compare` helper function when using Javascript's built-in `.sort()` method:
```javascript
let array = [someArray]
...
assert.deepEqual(timSort(array), array.sort(compare)) //where 'compare' is predefined at the beginning of index.test.js
```
If the dependency for running tests (Mocha or Jest) is properly installed, simply write your tests and run `npm run test` in the console/terminal. (Currently, the `package.json` `scripts` is set to recognize Jest as the testing framework.) Alternatively, you may run `jest test/index.text.js --watch` to keep the testing environment running during changes.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/rscheiwe/npm-timsort/contributing.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

### Acknowledgments

* [This gist](https://gist.github.com/brandonskerritt/f6ccc000ab6527769999fd0a9ebf59de) as initial inspiration
