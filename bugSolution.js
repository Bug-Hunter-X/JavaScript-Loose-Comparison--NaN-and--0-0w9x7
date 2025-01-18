function foo(a, b) {  if (a === b) {    return true;  } else {    return false;  }}

console.log(foo(NaN, NaN)); //false
console.log(foo(0, -0)); //false

//Additional check for -0 and 0
function foo2(a,b){  if (a === b || (a === 0 && b === -0) || (a === -0 && b === 0)){    return true;  }else {    return false;  }}
console.log(foo2(0,-0));//true