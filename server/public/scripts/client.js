var myApp = angular.module('myApp', []);

myApp.controller('oprahCounter', function(GetHighFives) {
  console.log('HighFiving Oprah');

  var vm = this;

  vm.count = GetHighFives.getCounter();
    vm.counting = function() { //function I will call is counting because it is attached to the view model
      GetHighFives.counterSetter(); //increment counter
      vm.count = GetHighFives.getCounter(); //get the current count
    };
}); // end Oprah
