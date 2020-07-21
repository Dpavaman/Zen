var myArr = [1,2,5,9,4,2,3,5,12,35,25,48,102,115,201,304,2010,500,2020];
var temp = 0;
for(let ind = 0 ; ind < myArr.length ; ind++)
{
    if(myArr[ind] > temp)
    {
        temp = myArr[ind];
    }
}
console.log(temp);