2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

//creating class and setting mentioned parameters
class cirlce {
  parameters (radius,color){
      this.radius = radius;
      this.color = color;
  }
  getRadius(){
    let setradius = parseInt(this.radius);
    return setradius;
  }
  getColor(){
    let setcolor = (this.color).toString();
    return setcolor;
  }
  getArea (){
   return console.log((Math.PI*this.radius*this.radius).toFixed(2));
  }
  getCircumference (){
   return console.log((2*Math.PI*this.radius).toFixed(2));
  }

}
//create object for class circle
let circleobj = new cirlce ();
//accessing the class
circleobj.parameters(3.0,"red")
console.log(`Radius:${circleobj.getRadius()}`);
console.log(`Color:${circleobj.getColor()}`);
circleobj.getArea();
circleobj.getCircumference();
