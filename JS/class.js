// Class definition
class Rectangle {
    //constructor
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    //Getter
    get area() {
        return this.calcArea();
    }
    //Method
    calcArea() {
        return this.height * this.width;
    }
}