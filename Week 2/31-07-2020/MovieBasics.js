class Movie{
    constructor(title,studio,rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;

        /*
     A constructor which takes a string title representing title of the movie, a string studio representing the studio made the movie 
     and a string rating representing the rating given to the movie has been created. 
     
     default value of rating is also set to "PG" if not provided while calling it.
    */
    var returnArray = [];
    getGP(array){
        for(let ind = 0 ; ind < array.length ; ind++)
        {
            if(array[ind].rating === "PG")
            {
                returnArray.push(array[ind]);
            }
        }
        console.log(returnArray);
    }
    /*
        Method getPG is written to get only the movies having their ratings equal to PG.
    */
    }    
}

var movie1 = new Movie("Casino Royale" , "Eon productions" , "PG13");
/*
an instance of class Movie is created.
*/


