var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

// added the event listener for the animation and its style
hole.addEventListener("animationiteration", () => {
  var random = -(Math.random() * 300 + 150);
  hole.style.top = random + "px";
  counter++;
});
