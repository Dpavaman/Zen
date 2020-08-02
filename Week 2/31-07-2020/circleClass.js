class Circle{
    constructor(radius = 1.0,color = "red"){
        this.radius = radius;
        this.color = color;
        this.getRadius = function(){
            console.log("Radius is", this.radius);
        };
        this.getColor = function(){
            console.log("color is", this.color);
        };
        this.setRadius = function(rad){
            this.radius = rad;
        };
        this.setColor = function(colorNew){
            this.color = colorNew;
        };
        this.tostring = function(){
            console.log("Circle with Radius", this.radius + " and color",this.color);
        };
        this.getArea = function(){
            console.log("Area  of Circle with Radius",this.radius + " is", (Math.PI * this.radius * this.radius).toFixed(2));
        };
    }
}
var circle1 = new Circle();
circle1.getColor();
circle1.getRadius();
circle1.setRadius(2.0);
circle1.setColor("Yellow");
circle1.getRadius();
circle1.getColor();
circle1.tostring();
circle1.getArea();