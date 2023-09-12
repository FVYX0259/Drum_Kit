let n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });

    document.addEventListener("keydown", function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    })
}

function makeSound(key){
    switch (key) {
        case 'w':
            var audio = new Audio("tom-1.mp3");
            break;
        case 'a':
            var audio = new Audio("tom-2.mp3");
            break;
        case 's':
            var audio = new Audio("tom-3.mp3");
            break;
        case 'd':
            var audio = new Audio("tom-4.mp3");
            break;
        case 'j':
            var audio = new Audio("snare.mp3");
            break;
        case 'k':
            var audio = new Audio("crash.mp3");
            break;
        case 'l':
            var audio = new Audio("kick-bass.mp3");
            break;
        default:
            console.log(key);    
    }
    audio.play();
}

function buttonAnimation(currentEvent){
    var currevt = document.querySelector("." + currentEvent);
    currevt.classList.add("pressed");
    setTimeout(function(){
        currevt.classList.remove("pressed");
    },100);
}