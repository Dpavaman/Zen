var arr = [20,35,95,67,43,38,45];
var  primeArr = function(arr) {
  
    //Test for Prime Number
    
    function isPrime(testNo){
    
      var result = false;
      for(var n = testNo - 1; n > 1; n--){
          result = (testNo % n === 0) + result;
      }
      
      if(result === 0 && testNo > 1){
        return true;
      }return false;
    }

    var newArr = []; 
    
    for(n=0; n<arr.length; n++){
      if(isPrime(arr[n])){
        newArr.push(arr[n]);
      }
    }
    
    return newArr;
  }
  console.log(primeArr(arr));