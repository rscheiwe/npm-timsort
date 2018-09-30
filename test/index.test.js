'use strict';

const assert = require('assert')

const timSort = require('../index.js')
const randomArray = require('../arrayCreator.js')

let array, arrayLarge, arrayLargeOne

let compare = (a, b) => a - b;

beforeEach(() => {
  array = [4,2,1,7]
  // arrayLarge = randomArray(1000, 1000)
})

describe('Sort an Array', ()=> {
  it('Sorts an Array already Declared', () => {
    assert.deepEqual(timSort(array), array.sort(compare))
  })

  it('Sorts a Single, Large, Generated Array', () => {
    arrayLargeOne = randomArray(1000,1000)

    assert.deepEqual(
      timSort(arrayLargeOne),
      arrayLargeOne.sort(compare)
    )
  })

  it('Sorts Multiple, Large, Generated Arrays', () => {

    for (let i = 0; i < 5; i++) {
      arrayLarge = randomArray(1000,1000)

      assert.deepEqual(
        timSort(arrayLarge),
        arrayLarge.sort(compare)
      )
    }
  })
})
