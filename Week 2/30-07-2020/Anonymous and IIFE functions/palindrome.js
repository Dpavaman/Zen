//return all the palindromes of n array
var arr = ["eye","house","sky","SOS","SAAS","POS"];
var palindrome = function(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
arr.forEach(element => {
      console.log(palindrome(element));
  });
