var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];

function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 for(let ind = 0 ; ind < arr.length ; ind++)
 {
    var obj = {}
     for(let inn = 0 ; inn < arr[ind].length ; inn++)
     {
         for(let lis = 0 ; lis < arr[ind][inn].length-1 ; lis++)
         {
            
            var key =  arr[ind][inn][lis];
            obj[key] = arr[ind][inn][lis+1];
         }
     }
     tranformEmployeeList.push(obj);
 }
 //Your code
 
 console.log(tranformEmployeeList);
}
transformEmployeeData(arr)