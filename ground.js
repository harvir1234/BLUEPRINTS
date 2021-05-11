class ground {

    constructor (x,y,width,height){

        var grounds={
            isStatic:true
          }
          this.body= Bodies.rectangle(200,380,400,20,grounds);
          World.add(world,this.body)

    }
    display(){

      var pos = this.body.position;
        rectMode(CENTER)
        fill("red")
        rect(pos.x,pos.y,400,20)
    }
}