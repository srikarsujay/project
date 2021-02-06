class Stone{
    constructor(x,y,r){
        var opitions={
            isStatic:false,
            restitution:0,
            friction:1
        }
        this.x=x
        this.y=y
        this.r=r
        this.image=loadImage("stone.png")
        this.body=Bodies.circle(this.x,this.y,this.r/2,opitions)
        World.add(world,this.body)
    }
  display(){
      fill("red")
      imageMode(CENTER)
      image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
  }
}