class TV{
    constructor(brand,price,inches,ONOFFstatus,volume = 50,channel = 1){
        this.brand = brand;
        this.price = price;
        this.inches = inches;
        this.ONOFFstatus = ONOFFstatus;
        this.increaseVolume = function(num){
            if(volume + num <= 100)
            {
                this.volume = volume + num;
            }
            else
            {
                this.volume = volume;
            }
        };
        this.decreaseVolume = function(num){
            if(volume - num >= 0)
            {
                this.volume = volume - num ;
            }
            else
            {
                this.volume = volume ;
            }
        };
        this.setChannel = function(num){
            if(num <= 50)
            {
                this.channel = num ;
            }
            else
            {
                this.channel = channel ;
            }
        };
        this.info = function(){
            if(this.ONOFFstatus === "ON")
            {
            console.log(this.brand + " at", this.channel + ", Volume",this.volume);
            }
        };
          this.reset = function(){
            this.volume = 50;
            this.channel = 1;
        };
    }
}

var myTv = new TV("Panasonic", 25000, 32, "ON");
myTv.increaseVolume(35);
myTv.setChannel(45);
console.log(myTv.info());
class LED_TV extends TV {
    properties(){
        this.thickness = "2Inches";
        this.energyUsage = "60Watts";
        this.lifeSpan = "4 to 6 Years" ;
        this.refreshRate = "60Hz";
    }
    functionalities(){
        this.ViewAngle = "120°" ;
        this.backlight =  "LED";
    }
}

class Plasma_TV extends TV {
    properties(){
        this.thickness = "6 cm";
        this.energyUsage = "150 Watts";
        this.lifeSpan = "30000 hours to 60000 hours" ;
        this.refreshRate = "60Hz";
    }
    functionalities(){
        this.ViewAngle = "160°" ;
        this.backlight =  "N/A";
    }
}