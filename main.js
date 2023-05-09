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