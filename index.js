var drumButton = document.querySelectorAll(".drum").length;

for(var i = 0; i<drumButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonClicked = this.innerHTML;

        buttonAnimation(buttonClicked);

        switch(buttonClicked){
            case "w":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
                
                case "a":
                    var tom2 = new Audio('sounds/tom-2.mp3');
                    tom2.play();
                    break;

            case "s":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
                
                case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;

            case "j":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;

            case "k":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;

            case "l":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;

            default: console.log(buttonClicked);
        }
    });
}

document.addEventListener("keypress", function(event){
    var input = event.key;
    console.log(input);
    buttonAnimation(event.key);
    if(input == "w"){
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
    }
    if(input == "a"){
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
    }
    if(input == "s"){
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
    }
    if(input == "d"){
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
    }
    if(input == "j"){
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
    }
    if(input == "k"){
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
    }
    if(input == "l"){
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
    }
});

function buttonAnimation(current){
    var activeButton = document.querySelector("." + current);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}