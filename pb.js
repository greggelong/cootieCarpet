class Pb {
    constructor(x,y,clr2,w,h){
        this.x =x
        this.y =y
        this.w =w
        this.h = h
        this.xspeed = random(-5,5)
        this.yspeed = random(1,5)
        this.clr = clr2
        this.histx=[this.x]
        this.histy=[this.y]
    }

    tintit(){
        tint(this.clr)
    }
    move(){

        this.x+= this.xspeed;
        this.y+= this.yspeed;
        this.histx.push(this.x)
        this.histy.push(this.y)
    }

    edges(){
        if(this.x >width+this.w/2){
            this.x = 0-this.w/2
        }
        if(this.x<0-this.w/2){
            this.x = width+this.w/2;
        }
        if(this.y >height+this.h/2){
            this.y = 0-this.h/2
        }
        if(this.y<0-this.h/2){
            this.y = height+this.h/2;
        }
    }
    show(){
        push()
        translate(this.x,this.y)
        rotate(frameCount)
        image(img,0,0,this.w,this.h)
        pop()
    }

    goback(){
        if(this.histx.length>1){
            this.x = this.histx.pop()
            this.y = this.histy.pop()
        } else{
            this.x = this.histx[0]
            this.y = this.histy[0]
        }
    }
}