var myCar = {
    make: "Bugatti",
    model: "Bugatti La Voiture Noire",
    year: 2019,
    accidents: [
    {
    date: "3/15/2019",
    damage_points: "5000",
    atFaultForAccident: true
    },
    {
    date: "7/4/2022",
    damage_points: "2200",
    atFaultForAccident: true
    },
    {
    date: "6/22/2021",
    damage_points: "7900",
    atFaultForAccident: true
    }
    ]
   }


   //TASK -1. Loop over the accidents array. Change atFaultForAccident from true to false.
   for(let ind = 0 ; ind < myCar.accidents.length ; ind++)
   {
       myCar.accidents[ind].atFaultForAccident = false;
   }
   //TASK -1 Ends Here

   //TASK -2.Print the dated of my accidents
   for(let ind = 0 ; ind < myCar.accidents.length ; ind++)
   {
       console.log(myCar.accidents[ind].date);
   }
   //TASK -2 Ends Here