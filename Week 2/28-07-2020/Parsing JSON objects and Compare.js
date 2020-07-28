var securityQuestions = [
    {
    question: "What was your first pet’s name?",
    expectedAnswer: "FlufferNutter"
    },
    {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985"
    },
    {
    question: "What city were you born in?",
    expectedAnswer: "NYC"
    }
   ]
   var flag;
   function chksecurityQuestions(securityQuestions,question,answer) {
       var obj = {};
       obj.question = question;
       obj.expectedAnswer = answer;
   for(let ind = 0 ; ind < securityQuestions.length ; ind++)
   {
       
       if(JSON.stringify(securityQuestions[ind]) === JSON.stringify(obj))
       {
           flag = true;
       }
       else
       {
           flag = false;
       }
   }
   console.log(flag);
   }
   chksecurityQuestions(securityQuestions,"What was your first pet’s name?","DufferNutter");
   /*
   //Test case1:
   var ques = "What was your first pet’s name?";
   var ans  =  "FlufferNutter";
   var status = chksecurityQuestions(securityQuestions, ques, ans);
   console.log(status); // true
   //Test case2:
   var ques = "What was your first pet’s name?";
   var ans  =  "DufferNutter";
   var status = chksecurityQuestions(securityQuestions, ques, ans);
   console.log(status); // flase
   */