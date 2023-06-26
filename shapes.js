class Shape {
    getArea(){
        throw new Error("you cannot creat an abstract shape")
    }
    getTotalSides(){
        throw new Error("you cannot creat an abstract shape")
    }
    getDimension(){
        throw new Error("you cannot creat an abstract shape")
    }
}
class Circle extends Shape {
    constructor(radius){
        super()
        this.radius = radius;
    }
    getArea(){
        return Math.PI * this.radius ** 2;
    }
    getTotalSides(){
        return 0;
    }
    getDimension(){
        return 2*Math.PI*this.radius
    }
}
class Triangle extends Shape {
    constructor(base,height){
    super()
    this.base = base;
    this.height = height;
    }
    getArea(){
        return this.base * this.height/2
    }
    getTotalSides(){
        return 3;
    }
    getDimension(){
        return "2 Dimensions";
    }
}
class Rectangle extends Shape {
    constructor(width,height){
    super()
    this.width = width;
    this.height = height;
    }
    getArea(){
        return this.width * this.height
    }
    getTotalSides(){
        return 4;
    }
    getDimension(){
        return "2 Dimensions";
        
    }
}
const circle = new Circle(5);
const triangle = new Triangle(3,6);
const rectangle = new Rectangle (4,6);

console.log("Area of Circle: " + circle.getArea());
console.log("Total sides of Circle: " + circle.getTotalSides());
console.log("Dimension of Circle: " + circle.getDimension());

console.log("Area of Triangle: " + triangle.getArea());
console.log("Total sides of Triangle: " + triangle.getTotalSides());
console.log("Dimension of Triangle: " +triangle.getDimension());

console.log("Area of Rectangle: " + rectangle.getArea());
console.log("Total sides of Triangle: " + rectangle.getTotalSides());
console.log("Dimension of Rectangle: " + rectangle.getDimension());


