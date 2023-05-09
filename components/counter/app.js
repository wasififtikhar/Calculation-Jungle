//targating the elements
const showCount = document.querySelector('.count');
const count = document.querySelector('.increase');
const decount = document.querySelector('.decrease');
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
// display.classList.add('wrap_backward')


let countNum = 0;

//increase number on click and changing in number text color
const doCount = count.addEventListener('click', () => {
    countNum++;
    // console.log(countNum);
    showCount.innerText = countNum;
    if(countNum < 0){
        showCount.classList.add('text-danger');
        showCount.classList.remove('text-white');
        showCount.classList.remove('text-dark');
    } 
    else if(countNum > 0){
        showCount.classList.add('text-white');
        showCount.classList.remove('text-danger');
        showCount.classList.remove('text-dark');
    } else {
        showCount.classList.add('text-dark');
        showCount.classList.remove('text-white');
        showCount.classList.remove('text-danger');
    }

})

//increase number on click and changing in number text color
const doDeCount = decount.addEventListener('click', () => {
    countNum--;
    // console.log(countNum);
    showCount.innerText = countNum;
    if(countNum < 0){
        showCount.classList.add('text-danger');
        showCount.classList.remove('text-white');
        showCount.classList.remove('text-dark');
    } 
    else if(countNum > 0){
        showCount.classList.add('text-white');
        showCount.classList.remove('text-danger');
        showCount.classList.remove('text-dark');
    } else {
        showCount.classList.add('text-dark');
        showCount.classList.remove('text-white');
        showCount.classList.remove('text-danger');
    }
})

