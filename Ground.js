class Ground{
    constructor(x,y,width,height){
        var ground_options = {
            isStatic : true
            ,'friction':0.3,
        }
        this.body =Bodies.rectangle(x,y,width,height,ground_options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    show(){
        var gos = this.body.position;
        rectMode(CENTER);
        fill("lightgreen")
        rect(gos.x,gos.y,this.width,this.height)
    }
}