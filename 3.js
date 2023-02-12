function number(func){
  func();

return function() {
  console.log("2")
 }
}

function argFunc(){
  
  console.log("4")
  
}
let resultFunc =number(argFunc);

resultFunc();