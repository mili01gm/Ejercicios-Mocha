function sumaArr(arr1,arr2){
  var nuevoArr = arr1.map(function(e,i){
    return e+arr2[i];
  })

  if(typeof(arr1)!= "object") {return "Error";}
  if(typeof(arr2)!= "object") {return "Error";}

  return nuevoArr;
}

// Esto es lo que corre la vaina
if(typeof exports !== 'undefined') {
    exports.sumaArr = sumaArr;
}
