function amIBigger(x){
   var y = new Promise(function(resolve, reject){
        if(x>50){
            resolve(x + " > 50");
        }else if(x= 50){
            resolve(x + " = 50");
        }else{
            reject(x + " < 50");
        }
    })
    return y;
}
amIBigger(70).then(function(result){console.log(result)}).catch(function(reject){console.log(reject)});
amIBigger(50).then(function(result){console.log(result)}).catch(function(reject){console.log(reject)});
amIBigger(4).then(function(result){console.log(result)}).catch(function(reject){console.log(reject)});