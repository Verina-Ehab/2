let counter =0;

const counterValue = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");

incrementBtn.addEventListener("click", ()=> {
    counter ++;
    counterValue.innerText = counter;
})

decrementBtn.addEventListener("click", ()=> {
    counter --;
    counterValue.innerText = counter;
})

resetBtn.addEventListener("click", ()=> {
    counterValue.innerText = 0;
})
