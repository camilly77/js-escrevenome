function setup(
    //criar canva 600, 400
    ) {
      createCanvas(600, 400);
      background("white")
    }
    
    function draw() {
      stroke("blue");
      fill("red");
      
      
      if (mouseIsPressed) {
        rect(mouseX, mouseY, 20, 35);
      }
    }
    