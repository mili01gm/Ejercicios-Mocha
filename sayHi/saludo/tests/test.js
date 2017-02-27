var assert = require('assert');
var Saluda = require('../app.js')

describe('holaMundo',function(){
  it('should return the message', function(){
    assert.equal(Saluda.holaMundo("en"),"Hello world!")
    assert.equal(Saluda.holaMundo("es"),"Hola mundo!")
    assert.equal(Saluda.holaMundo("de"),"Hallo welt!")
  })
})

describe('holaMundo',function(){
  it('should return the message', function(){
    assert.equal(Saluda.holaMundo("EN"),"Hello world!")
    assert.equal(Saluda.holaMundo("ES"),"Hola mundo!")
    assert.equal(Saluda.holaMundo("DE"),"Hallo welt!")
  })
})

describe('holaMundo',function(){
  it('should return an Error if the parameter is missing', function(){
    assert.equal(Saluda.holaMundo(undefined),"Error")
  })
})
