function anagram(str){
    var result = []
   if(!str){
    return []
   }
   if(str.length ===1){
    return [str]
   }
   if(str.length ===2){
    return [str[0]+str[1],str[1]+str[0]]
   }

   var result = [];
    for(var i=0; i<str.length; i++){
        for(var j=0; i<2; j++){
       result.push(str[i]+anagram(drop(str,i))[j])
    }
    return result
}

function drop(str , n){
    var result= ""
    for(i=0;i<str.length;i++){
        if(i===n){
            continue
        }
    }
}



module.exports=anagram