const timSort = require('./')
const randomArray = require('./arrayCreator.js')

const array = [88,1,4,9,3,5]
let timSorted = timSort(array)
console.log(timSorted)

// [ 1, 3, 4, 5, 9, 88 ]


let bigArray = randomArray(1000, 10000)

console.log(timSort(bigArray))
