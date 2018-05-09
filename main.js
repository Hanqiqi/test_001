// const fibonacci = require('./lib/fibonacci')
//console.log("hello world!");
function isLeapYear(year){
   if(year%400===0){

    return  true 
   }

   if(year%4===0){
    return  true
    
   }
   if(year%100===0){
    return  false 
   
   }
   return  false

}
//console.log("2000"+isLeapYear(2000));
//console.log("1900"+isLeapYear(1900));

const fibonacci = require('./lib/fibonacci')
for(var i=1; i<20; i++){
    console.log(fibonacci(i));

}
//反模式

var len = 20;
for(;len--; ){
 //   console.log(fibonacci(len));

}
