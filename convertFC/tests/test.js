var assert = require('assert');
var Convert = require('../convertidor.js')

describe('temperatura',function(){
  it('should return celsius', function(){
    assert.deepEqual(Convert.temperatura([67,54,75]),[19,12,23])
  })
})
