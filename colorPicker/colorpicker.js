
var numSquares = 6;
//var colors = generateColor(6); 
var colors = [];
var squares = document.querySelectorAll("#hard-grid .square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.getElementById("message");
var headerBackground = document.querySelector(".grid-header");
var resetButton = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var header = document.querySelector(".wrapper");
var modeButton = document.querySelectorAll(".mode")
var game = {}

game.init = function(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

game.init();

//colorDisplay.textContent = pickedColor;

init();

function init(){
    //Event Listener for Mode Buttons
    setUpModeButtons();    
    setUpSquares();
//End of For Loop
    reset();
}

function setUpSquares(){
    for( var i = 0; i < squares.length; i++){    
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.background;
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?"
            changeColor(clickedColor);
            headerBackground.style.background = pickedColor;
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Wrong!"
        }
    });

    } 
}

function setUpModeButtons(){
    for (var i = 0; i < modeButton.length; i++){
        modeButton[i].addEventListener("click", function(){
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();

        });
    }
}

function reset(){
    colors = generateColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }  
    }
}

resetButton.addEventListener("click", function(){
    reset();
});

//easy.addEventListener("click", function(){
//    numSquares = 3;
//    easy.classList.add("selected");
//    hard.classList.remove("selected");
//    colors = generateColor(numSquares);
//    colorDisplay.textContent = pickedColor;
//    messageDisplay.textContent = "";
//    pickedColor = pickColor();
//    for(var i = 0; i < squares.length; i++){
//        if(colors[i]){
//            squares[i].style.background = colors[i];
//        } else {
//            squares[i].style.display = "none";
//        }
//    }
//});
//
//hard.addEventListener("click", function(){
//    hard.classList.add("selected");
//    easy.classList.remove("selected");
//    numSquares = 6;
//    colors = generateColor(numSquares);
//    pickedColor = pickColor();
//    messageDisplay.textContent = "";
//    colorDisplay.textContent = pickedColor;
//    for (var i = 0; i < squares.length; i++){
//        squares[i].style.background = colors[i];
//        squares[i].style.display = "block";
//        } 
//});
    

function changeColor(color){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColor(num){
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor (){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
    
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
