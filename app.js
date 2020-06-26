function getNumber(num){
    display = document.getElementById('name');
    display.value += num;
  }
  
  function removeAll(){
      display = document.getElementById('name');
      display.value = '';
  }
  
  function getCalculate(){
      display = document.getElementById('name');
      display.value = eval(display.value);
  }
  
  function remove(){
      display = document.getElementById('name');
      display.value =""+ display.value.slice(0,display.value.length-1);
  }
  