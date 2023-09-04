/2
function isPerfectNumber(inputNumber) {

    //2
    var sum = 0;
  
    //3
    for (var i = 1; i < inputNumber; i++) {
  
      //4
      if (inputNumber % i == 0) {
        sum += i;
      }
    }
  
    //5
    if (sum == inputNumber) {
      return true;
    }
  
    //6
    return false;
  }
  
  //7
  console.log(
    "8128 is",
    isPerfectNumber(8128) ? "a perfect number" : "not a perfect number"
  );
  console.log(
    "4 is",
    isPerfectNumber(8128) ? "a perfect number" : "not a perfect number"
  );
