//3. Write a “person” class to hold all the details.


// create a class
class Person{
  constructor(name,heigth,weigth,age,colour,qualification,city, state){
      this.name=name;
      this.heigth=heigth;
      this.weigth=weigth;
      this.age=age;
      this.colour=colour;
      this.qualification=qualification;
      this.city=city;
      this.state=state;
  }
  details(){
      console.log(`
      name:${this.name}
      height:${this.heigth}
      weight:${this.weigth}
      age:${this.age}
      color:${this.colour}
      qualification:${this.qualification}
      city:${this.city}
      state:${this.state}`)
  }
}
let Person1=new Person("Shashank","5.8","55","22","Indian","BE","Uttara kannada","KARNATAKA")
Person1.details()

// Output:
      name:Shashank
      height:5.8
      weight:55
      age:22
      color:Indian
      qualification:BE
      city:Uttara kannada
      state:KARNATAKA
