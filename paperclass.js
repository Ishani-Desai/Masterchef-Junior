class Paperclass {
constructor(x,y,r){
var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
this.x = x;
this.y = y;
this.radius = r;
this.body=Bodies.circle(this.x,this.y,this.radius,options);
World.add(world,this.body);
}
display(){
    var pos = this.body.position;
    push()
    translate(pos.x,pos.y);
    ellipseMode(CENTER);

    fill("white");
    ellipse(0,0,this.radius, this.radius);
    
}
}