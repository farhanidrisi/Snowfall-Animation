class Snow{
    constructor(x, y){
        var options ={
            restitution: 0.4,
            density: 1.2 
        }
        this.r = 5;
        this.body = Bodies.circle(x, y, this.r, options);
      //  this.color = color(random(0, 255), random(0,255), random(0, 255));
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();

    }
    updateY(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,400)})
        }
    }
}