
class ground{
    constructor(x,y,w,h){
        let options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.w = w;
        this.h = h;
        World.add(this.body,world);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        Mode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop();
    }
}