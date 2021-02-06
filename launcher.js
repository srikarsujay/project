class Launcher{
    constructor(bodyA, pointB){
        
        var options = {
            bodyA: bodyA,
          pointB:pointB
        }
        this.sling =Matter. Constraint.create(options);
        this.bodyA=bodyA
        this.pointB=pointB
        World.add(world, this.sling);
    }
     attach(body){
         this.sling.bodyA=body
     }
     fly(){
         this.sling.bodyA=null
     }
    display(){
        
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(2);
        
        line(pointA.x,pointA.y,pointB.x,pointB.y);}
    }
    
