var enterButton = document.getElementById('enterButton');
var againButton = document.getElementById('againButton');
var output = document.getElementById('outputText');

var randomNumber = Math.ceil(Math.random()*2);

function checkNumber(){
    var input = document.getElementById('userInput').value;
    if(input == randomNumber){
        output.innerHTML= 'You guess right'+ ','+'it was '+ randomNumber;
        output.style.color='green';
        
    }
    else if(input>randomNumber && input<2){
        output.innerHTML='You guessed too high';
    }
    else if(input<randomNumber && input>1){
        output.innerHTML='You guessed too low';
    }
    else if(input < 1){
        output.innerHTML='Higher, it has to be between 1 and 2';

    }
    else if(isNaN(input)){
        output.innerHTML = 'Thats not a number';
    }
    else{
        output.innerHTML = 'lower it has to be between 1 and 2'
    }
}
enterButton.addEventListener('click',checkNumber);
againButton.addEventListener('click', function(){
    location.reload();
})