"use strict"

function randomArray(length, maxNum) {
  return Array.apply(null, Array(length))
    .map(() => Math.round(Math.random() * maxNum))
}

module.exports = randomArray
