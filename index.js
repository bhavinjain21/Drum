var a = document.querySelectorAll(".drum").length;
function abc(){
  var tc = this.textContent;
  ms(tc);
  animation(tc);
 }
for(var i = 0; i< a; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",abc);
  
  }
document.addEventListener("keypress",function abcd(event){
  ms(event.key);
  animation(event.key);
  });

function ms(key){
  
  switch (key){
    case "a":
    var b = new Audio("tom-1.mp3");
    b.play();
    break;
     case "b":
    var c = new Audio("tom-2.mp3");
    c.play();
    break;
     case "c":
    var d = new Audio("tom-3.mp3");
    d.play();
    break;
    
     case "d":
    var e = new Audio("tom-4.mp3");
    e.play();
    break;
      case "e":
    var f = new Audio("snare.mp3");
    f.play();
    break;
     case "f":
    var g = new Audio("kick-bass.mp3");
    g.play();
    break;
     case "g":
    var h = new Audio("fill.mp3");
    h.play();
    break;
    
    default: 
      console.log(hello);
  }
 }
 function animation(ck){
   var tc = this.textContent;
  var ab =  document.querySelector(tc);
  ab.classList.add(".press");
   
  }
