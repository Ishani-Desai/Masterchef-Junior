class Dustbinclass {
    constructor(x,y){
   
    this.x = x;
    this.y = y;
    this.width=200;
    this.height=100;
    this.thickness=20;
    this.angle=0;
    this.bottombody=Bodies.rectangle(this.x,this.y,this.width, this.thickness,{
        isStatic:true });

        this.leftbody=Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.thickness,this.height,{
            isStatic:true})
  Matter.Body.setAngle(this.leftbody, this.angle)
            this.rightbody=Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.thickness,this.height,{
                isStatic:true})
     Matter.Body.setAngle(this.rightbody, this.angle*(-1));
     World.add(world.this.bottombody);
    World.add(world,this.leftbody);
    World.add(world,this.rightbody);
    }
    display(){
        var posBottom=this.bottombody.position;
         var posLeft=this.leftbody.position;
          var posRight=this.rightbody.position;
          push() 
          translate(posLeft.x, posLeft.y);
           rectMode(CENTER)
            //strokeWeight(4);
             angleMode(RADIANS)
              fill(255) 
              stroke(255)
               rotate(this.angle)
                rect(0,0,this.thickness, this.height);
                 pop()

                 push()
                  translate(posRight.x, posRight.y);
                   rectMode(CENTER) //strokeWeight(4);
                    stroke(255)
                     angleMode(RADIANS)
                      fill(255)
                       rotate(-1*this.angle) 
                       rect(0,0,this.thickness, this.height);
                        pop()

                        push() 
                        translate(posBottom.x, posBottom.y);
                         rectMode(CENTER) 
                         //strokeWeight(4); 
                         stroke(255)
                          angleMode(RADIANS)
                           fill(255) 
                           rect(0,0,this.dustbinWidth, this.wallThickness);
                            pop()
    }
    }