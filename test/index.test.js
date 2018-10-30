'use strict';

const assert = require('assert')

const timSort = require('../index.js')
const randomArray = require('../arrayCreator.js')
const testArrays = require('./Arrays.js')

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

describe('Sort an Array Using Built-in JS .sort() Method', ()=> {
  it('Benchmarking Small Array', () => {
    assert.deepEqual([1,2,4,7], array.sort(compare))
  })

  it('Benchmarking Single, Generated Array', () => {
    assert.deepEqual(
      testArrays.sortedShort,
      testArrays.randomShort.sort(compare)
    )
  })

  it('Benchmarking Large, Generated Array', () => {
    assert.deepEqual(
      testArrays.sortedLong,
      testArrays.randomLong.sort(compare)
    )
  })

  it('Benchmarking Huge, Generated Array', () => {
    assert.deepEqual(
      testArrays.sortedHuge,
      testArrays.randomHuge.sort(compare)
    )
  })
})

describe('Sort an Array Using TimSort-Node Method', ()=> {
  it('Benchmarking Small Array', () => {
    assert.deepEqual([1,2,4,7], timSort(array))
  })

  it('Benchmarking Single, Large, Generated Array', () => {
    assert.deepEqual(
      testArrays.sortedShort,
      timSort(testArrays.randomShort)
    )
  })

  it('Benchmarking Large, Generated Array', () => {
    assert.deepEqual(
      testArrays.sortedLong,
      timSort(testArrays.randomLong)
    )
  })

  it('Benchmarking Huge, Generated Array', () => {
    assert.deepEqual(
      testArrays.sortedHuge,
      timSort(testArrays.randomHuge)
    )
  })
})
