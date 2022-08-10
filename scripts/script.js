const counter = document.querySelector('.counter');
const increaseButton = document.querySelector('.increase');
const decreaseButton = document.querySelector('.decrease');
const resetButton = document.querySelector('.reset')
let convertText = Number(counter.innerHTML);

const addToCounter = () => {
    convertText += 1;
    counter.innerHTML = convertText;
    if(convertText > 0){
        counter.classList.add('be-green');
        counter.classList.remove('be-red');
    }else if (convertText == 0) {
        counter.classList.remove('be-green', 'be-red'); 
     }
}

const removeFromCounter = () => {
    convertText -= 1;
    counter.innerHTML = convertText;
    if(convertText < 0){
        counter.classList.add('be-red');
        counter.classList.remove('be-green');
    }else if (convertText == 0){
        counter.classList.remove('be-green', 'be-red'); 
     }
}


const resetNumber = () => {
    convertText = 0;
    counter.innerHTML = convertText;
    if (convertText == 0){
       counter.classList.remove('be-green', 'be-red'); 
    }
}
    

increaseButton.addEventListener('click', addToCounter);
decreaseButton.addEventListener('click', removeFromCounter);
resetButton.addEventListener('click', resetNumber);

