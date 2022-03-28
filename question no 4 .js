// 4. write a class to calculate uber price.


class Uber_Price {
  constructor(distance) {
    this.distance = distance;
    
  }
  getPrice() {
    return (this.distance ) *15;
  }
}

let uber = new Uber_Price(10);
console.log(uber.getPrice());

//Output:
150
