function setup() {
    createCanvas(1000, 1000);
    background("pink")
  }
  
  function draw() {
    stroke("purple");
    fill("purple");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  