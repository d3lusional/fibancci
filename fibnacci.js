function fib() {
  // Some variables here
  var a = 1;
  var b = 0;
  var f = 0

  function nacci() {
    // do something to those variables here
    f = a + b;
    a = b;
    b = f;

    console.log(f)
  }
  

  return nacci
}

var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8