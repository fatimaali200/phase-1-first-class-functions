// -1-
function receivesAFunction(callback){
    callback();
}
receivesAFunction(()=> console.log("Hello World !!"))

// -2-
function returnsANamedFunction(){
  function  innerFunction(){
    console.log("Hello World !!");
 }
  return innerFunction;
}
// -3-
function returnsAnAnonymousFunction(){
    return function(){
        console.log("Hello World !!");
    }
}