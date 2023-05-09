

//Wrap code in an IIFE
(function(){

  const transtion = document.querySelector('.trigger');
const display = document.querySelector('body');

setInterval(() => {
    display.classList.remove("display_none")
    display.classList.add("display")
}, 1000)
setInterval(() => {
    transtion.classList.add("wrap_light")
}, 2000)
setInterval(() => {
    transtion.classList.add("wrap_backward")
}, 2500)
  
  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn-trigger');
  let clear = document.querySelector('.btn-clear');
  let equal = document.querySelector('.btn-equal');
  let except = document.querySelector('.dropdown-toggle')
  
  //retrieve data from numbers that are clicked
  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      let value = e.target.dataset.num;
      screen.value += value;
    })
  });

  
  equal.addEventListener('click', function(e){
    if(screen.value === ''){
      screen.value = 'Please Enter a Value';
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  })
  
  clear.addEventListener('click', function(e){
    screen.value = '';
  })
 
})(); //end IIFE
