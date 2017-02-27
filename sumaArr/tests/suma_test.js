var assert = require('assert');
var suma = require('../suma.js')

describe('sumaArr',function(){
  it('should return a new array with the addition of the given arrays elements', function(){
    assert.deepEqual(suma.sumaArr([1,2,3],[3,2,1]),[4,4,4])
  })
})

describe('sumaArr',function(){
  it('should return Error if one of the parameters is not an array',function(){
    assert.equal(suma.sumaArr([1,2,3],"1,2,3"),"Error")
  })
})
