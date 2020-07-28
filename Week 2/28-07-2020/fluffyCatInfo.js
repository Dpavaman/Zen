var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat breadomblet"],
    weight: 8,
    furcolor: "white"
    }, 
    {
    name: "foo",
    activities: ["sleep", "pre-sleep naps"],
    weight: 3
    }
    ]
   }

   // TASK -1 : Adding Height and Weight to Fluffyy
   cat.height = 2;
   cat.weight = 5;
   console.log(cat);
   // TASK -1 ends here.

   //TASK -2 : Fluffy name is spelled wrongly. Update it to Fluffyy
   cat.name = "Fluffyy";
   //TASK -2 ends here.

   //TASK -3 : List all the activities of Fluffyy’s catFriends.
   for(let ind = 0 ; ind < cat.catFriends.length ; ind++)
   {
       console.log("Activities of",cat.catFriends[ind].name + " are",cat.catFriends[ind].activities);
   }
   //TASK -3 ends here.

   //TASK -4 : Print the catFriends names..
   for(let ind = 0 ; ind < cat.catFriends.length ; ind++)
   {
       console.log(cat.catFriends[ind].name);
   }
   //TASK -4 ends here.

    //TASK -5 : Print the total weight of catFriends
    let sum = 0;
    for(let ind = 0 ; ind < cat.catFriends.length ; ind++)
    {
        sum = sum + cat.catFriends[ind].weight
        
    }
    console.log("Total weight of cat friends is", sum);
    //TASK -5 ends here.

    //TASK -6 : Print the total activities of all cats (op:6)
    let arr =[];
    arr = arr + cat.activities;
    for(let ind = 0 ; ind < cat.catFriends.length ; ind++)
    {
        arr = arr + cat.catFriends[ind].activities
        
    }
    console.log("Total Activities are: ", arr);
    //TASK -6 ends here.

    //TASK -7 : Add 2 more activities to bar & foo cats
    let addAct = ["playing", "Drink Milk"];
    for(let ind = 0 ; ind < cat.catFriends.length ; ind++)
    {
        for(let act = 0 ; act < addAct.length ; act++)
         {
             cat.catFriends[ind].activities.push(addAct[ind]);
        }
        
    }
    console.log(cat.catFriends);
    //TASK -7 ends here.

    //TASK -8 : Update the fur color of foo 
    cat.catFriends[1].furcolor = "Black"; // question is to update the fur color of bar, since fur color of bar is already available and not so for foo, Updated the furcolor of foo.
    //TASK -8 ends here.
   
    console.log(cat);
