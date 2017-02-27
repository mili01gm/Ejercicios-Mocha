function holaMundo(string){
  if(string == "es"){ return "Hola mundo!";}
  if(string == "en"){ return "Hello world!";}
  if(string == "de"){ return "Hallo welt!";}
  if(string == "ES"){ return "Hola mundo!";}
  if(string == "EN"){ return "Hello world!";}
  if(string == "DE"){ return "Hallo welt!";}

  if(string == undefined){return "Error";}
}

if(typeof exports !== 'undefined') {
    exports.holaMundo = holaMundo;
}
