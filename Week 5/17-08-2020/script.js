var area = document.createElement('div');
area.setAttribute('id','display');
document.body.appendChild(area);




function start(callback){
    callback();
};

start(function(){
    setTimeout(function(time){
        document.getElementById('display').innerHTML = time;

            setTimeout(function(time){
                document.getElementById('display').innerHTML = time;

                setTimeout(function(time){
                    document.getElementById('display').innerHTML = time;

                    setTimeout(function(time){
                        document.getElementById('display').innerHTML = time;

                        setTimeout(function(time){
                            document.getElementById('display').innerHTML = time;

                            setTimeout(function(time){
                                document.getElementById('display').innerHTML = time;

                                setTimeout(function(time){
                                    document.getElementById('display').innerHTML = time;

                                    setTimeout(function(time){
                                        document.getElementById('display').innerHTML = time;

                                        setTimeout(function(time){
                                            document.getElementById('display').innerHTML = time;

                                            setTimeout(function(time){
                                                document.getElementById('display').innerHTML = time;

                                                setTimeout(function(string){
                                                    document.getElementById('display').innerHTML = string;
                                                },1000,'Happy Independence Day...!')  

                                            },1000,1);

                                        },1000,2);

                                    },1000,3);

                                },1000,4);

                            },1000,5);

                        },1000,6);

                    },1000,7);

                },1000,8);
                
            },1000,9);
                                                                        
    },1000,10)
    
});
