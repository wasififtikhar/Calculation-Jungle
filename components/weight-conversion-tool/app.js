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
    // transtion.classList.remove("wrap")
}, 2500)

const form = document.querySelector('form');


//add an event listener to the form

form.addEventListener('submit', function(e){
    e.preventDefault();
    const input = document.querySelector('input');
    let results = document.querySelector('span');
    let poundsToKG;

    if ((input.value <= 0) || (isNaN(input.value))){
        results.classList.add('text-center', 'text-danger', 'fs-5');
        results.innerHTML = "<p>Please enter a value number!</p>"
        setTimeout(function(){
            results.innerHTML = '';
            
            results.classList.remove('text-center', 'text-danger', 'fs-5');
        }, 4000)
        input.value = '';
    } else {
        poundsToKG = Number(input.value) / 2.2;
        results.classList.add('text-success');
        results.innerHTML = `${poundsToKG.toFixed(2)}`;
        // results.innerHTML = '';
        // input.value = '';
        setTimeout(function(){
            // results.classList.remove('no-error');
        }, 10000)
        
    }
    
    
})
