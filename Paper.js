class Paper {
    constructor(x, y,) {
      var options = {
          'restitution':0.8,
          'friction':0.8,
          'density':1.0
      }

      this.x=x;
      this.y=y;
      this.body = Bodies.circle(x, y, 30, options);
      this.radius = 30;
      
      
      World.add(world, this.body);
      this.image = loadImage("sprites/paper.png");
    }
    display(){
      var pos =this.body.position;
       
      var angle = this.body.angle;
      push();
  
       
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill(255);
      strokeWeight=0
      ellipse(0, 0,30,30 );
      imageMode(CENTER);
      image(this.image, 0, 0, 90, 90);
      pop();

      
    }
  };
  