function amIBigger(x){
    y = new Promise((resolve, reject), function(){
        if(x>50){
            resolve(x + " > 50");
        }else if(x= 50){
            resolve(num + " = 50");
        }else{
            reject(num + " < 50");
        }
    })
    return y;
}
amIBigger(70).then(result, function(){console.log(result)}).catch(reject, function(){console.log(reject)});
amIBigger(50).then(result, function(){console.log(result)}).catch(reject, function(){console.log(reject)});
amIBigger(4).then(result, function(){console.log(result)}).catch(reject, function(){console.log(reject)});