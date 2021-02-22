class Rope {
    constructor(b1,p1){
      var options= {
         bodyA:b1,
         pointB:p1,
         stiffness:1.2,
         length:400
      }  

      this.pointB=p1;
      this.rope=Constraint.create(options);
      World.add(world,this.rope);
    }
    display(){
        if(this.rope.bodyA){
            var pointA=this.rope.bodyA.position;
            var pointB=this.pointB;
            push();
            strokeWeight(4);
            stroke("black");
            fill("black");
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
        }
    }


}


