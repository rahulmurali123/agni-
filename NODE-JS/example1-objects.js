// objects
//const People = {
   // Name : 'Virat Kolhi',
  //  Age : 35
//}
//console.log(People);

//with function inside the object

//const People = {
//    Name : 'Virat Kolhi',
  //  Age : 35,
  //  Greet : function () {
  //      console.log('Hello '+ this.Name);
  //  }
//}
//People.Greet()

// using arrow symbol inside the object


const People = {
    Name : 'Virat Kolhi',
    Age : 35,
    Greet :()=>  {
        console.log('Hello '+ this.Name);
    }
}
People.Greet()