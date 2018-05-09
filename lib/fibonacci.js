function fibonacci(n){
   
 //   if(n>2){
  //  return fibonacci(n-2)+fibonacci(n-1)
 //   }

 if(n>=3){
    return fibonacci(n-2)+fibonacci(n-1)
 }
     return 1;
}

module.exports = fibonacci