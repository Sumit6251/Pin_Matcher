
function getPin(){
    let pin = Math.random() * 10000;
    let pinRound = Math.round(pin);
    let pinRoundText = pinRound + '';
    
    if(pinRoundText.length == 4) return pinRound;
    else return getPin();
    
}

function generatePin(){
    let finalpin = getPin();
    document.querySelector('.display-pin').value = finalpin;
}

document.querySelector('.key-pad').addEventListener('click',function(event){
    let number = event.target.innerText;
    let calc = document.querySelector('.typed-numbers');
    if(isNaN(number)){
        
        if(number == 'C'){
            calc.value = ''
        }
    }else{
        
    let currentValue = calc.value;
    let newValue = currentValue + number;
    calc.value = newValue
    }
    
})

function verifyPin(){
    let pin = document.querySelector('.display-pin').value;
    let typed = document.querySelector('.typed-numbers').value;
    let failError = document.querySelector('.notify-fail');
    let success = document.querySelector('.notify-success');


    if(pin == typed){
        success.style.display = 'block'
        failError.style.display = 'none'    
       
    }else{
        failError.style.display = 'block'       
        success.style.display = 'none'

    }
}
