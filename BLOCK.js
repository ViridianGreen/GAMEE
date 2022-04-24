class BLOCK{
    constructor(x,y,w,h){
        let options = {
            isStatic: false,
            density: 1.5,
            friction: 10,
            restitution: 0.8,
          
            }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.image = loadImage("block.png");
        World.add(world, this.body);
    }

    show(){

    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.w,this.h);
    pop();
    }
}










