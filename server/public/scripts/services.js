//random counter generator
myApp.service('GetHighFives', function(){

  var counter = 0;

  //return current value of getCounter
  this.getCounter = function(){
    return counter;
  };

  this.counterSetter = function(){
    console.log("counter setter running");
    counter++;
  };// high five counter end


  this.randomCounter = function() {
    var randomCounter = Math.floor(Math.random()* (1 + max - min) + min);
    return randomCounter;
  };
}); // end services
