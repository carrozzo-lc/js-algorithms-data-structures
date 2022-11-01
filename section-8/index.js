function power(num1, num2){
    if (num2 === 0) return 1;
    return num1 * power(num1, num2 - 1);
}

function factorial(num){
   if (num === 0) return 1;
   return num * factorial(num - 1);
}

const productOfArray = (arr) => {
    
    let result = 1;

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        result = result * helperInput[0]
     
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;
}

function recursiveRange(num){
  if(num === 0) return null;
  return num + recursiveRange(num - 1);
}

function fib(num){
  if(num === 0) return 0;
  if(num === 1) return 1;
  return fib(num - 1) + fib(num - 2);
}




///////////////

POWER SOLUTION
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}
FACTORIAL SOLUTION
function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}
PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
RECURSIVE RANGE SOLUTION
function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}
FIBONACCI SOLUTION
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

