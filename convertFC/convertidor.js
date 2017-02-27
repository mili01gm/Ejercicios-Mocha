function temperatura(array){
  var cambia = array.map(function(e){
    return parseInt((e-32)*(5/9));
  });

  return cambia;
}

if(typeof exports !== 'undefined') {
    exports.temperatura = temperatura;
}
