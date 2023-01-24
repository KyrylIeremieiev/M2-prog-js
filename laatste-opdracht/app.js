import {Rect} from "./rect.js"
class App
{
    constructor()
    {
        this.stripePos = 10;
        this.x=0;
        this.images=[]
        this.y=0;
        this.playerPos=10
        this.player = new Rect(0, 0, 24, 24)
        this.playerSprite = new Rect(87, 17, 175, 109);
        this.phase1=true
        this.phase2=false
        this.end=false
    }

    loadImages()
    {

        this.runApplication()
    }

    init()
    {
        this.loadImages()
    }

    runApplication()
    {
        let canvas = document.getElementById("canvas");
        this.g = canvas.getContext("2d");
        let scope = this;
        const element = document.getElementById("myBtn");
        element.addEventListener("click", (e)=>{
            
            console.log("dskjj"+ this)
            if(this.end==false)
            {
            this.playerPos+=40
            }
        });

        setInterval(function () {scope.render()}, 150);
    }
    render()
    {
        
        this.g.fillStyle="white"
        this.g.fillRect(0, 0, 600, 600)
        if(this.phase1==true)
        {
            this.random()
            this.drawRoad()
            this.drawStreet()
            this.renderPlayer()
        }
        if(this.phase2==true)
        {
            this.drawBrokenRoad()
            this.renderPlayer()
            this.End()
            this.drawBigTree(350, 30)
        }
        if(this.playerPos>600)
        {
            this.playerPos=20
            this.phase1=false
            this.phase2=true
        }
        this.drawFrame()
    }

    drawFrame()
    {
        let progress1=0
        let progress2=0
        let progress3=0
        let progress4=0
        for (let i = 0; i < 61; i++) {
            let color=["purple", "blue", "red", "yellow"]
            let random=Math.floor(Math.random() * 3) + 1
            this.g.beginPath();
            this.g.fillStyle=color[random]
            this.g.arc(progress1+0, 0, 10, 0, 2 * Math.PI);
            this.g.fill();
            this.g.closePath();
            progress1+=10
        }
        for (let i = 0; i < 61; i++) {
            let color=["purple", "blue", "red", "yellow"]
            let random=Math.floor(Math.random() * 3) + 1
            this.g.beginPath();
            this.g.fillStyle=color[random]
            this.g.arc(600, progress2, 10, 0, 2 * Math.PI);
            this.g.fill();
            this.g.closePath();
            progress2+=10
        }
        for (let i = 0; i < 61; i++) {
            let color=["purple", "blue", "red", "yellow"]
            let random=Math.floor(Math.random() * 3) + 1
            this.g.beginPath();
            this.g.fillStyle=color[random]
            this.g.arc(progress3, 600, 10, 0, 2 * Math.PI);
            this.g.fill();
            this.g.closePath();
            progress3+=10
        }
        for (let i = 0; i < 61; i++) {
            let color=["purple", "blue", "red", "yellow"]
            let random=Math.floor(Math.random() * 3) + 1
            this.g.beginPath();
            this.g.fillStyle=color[random]
            this.g.arc(0, progress4, 10, 0, 2 * Math.PI);
            this.g.fill();
            this.g.closePath();
            progress4+=10
        }
    }

    drawBigTree(x, y){
        this.drawTriangle("green", x+65, y+60, x-60, y+400, x+180, y+400)
        this.drawCone("blue", x+11, y+0, 0.5)
        this.g.fillStyle="brown"
        this.g.fillRect(x+20, y+400, 80, 100)
    }

    End()
    {
        if(this.playerPos > 140)
        {
            this.end=true
        }
    }

    drawBrokenRoad()
    {
        this.g.fillStyle = "black"
        this.g.fillRect(0, 262.5, 230, 75)
        for(let i=0; i < 12; i++)
        {
            this.g.fillStyle="white"
            this.g.fillRect(this.stripePos, 290, 40, 20)
            this.stripePos+=50
        }
    }

    renderPlayer()
    {
        //player
        
        this.g.fillStyle= "purple"
        this.g.fillRect(this.playerPos, 240, 40, 80)
    }

    drawStreet()
    {
        let progress = 20
        for(let i = 0; i < 6; i++)
        {
            this.drawHouse(progress, 194)
            this.drawChristmasTree(progress+53, 199)
            progress += 90
        }
    }


    drawRoad()
    {
        this.g.fillStyle = "black"
        this.g.fillRect(0, 262.5, 600, 75)
        for(let i=0; i < 12; i++)
        {
            this.g.fillStyle="white"
            this.g.fillRect(this.stripePos, 290, 40, 20)
            this.stripePos+=50
        }
    }

    random()
    {
        this.onoff = Math.random()
        if (this.onoff < 0.5)
        {
            this.window1 = "black"
        }
        else if (this.onoff > 0.5)
        {
            this.window1 = "yellow"
        }
        this.onof = Math.random()
        if (this.onof < 0.5)
        {
            this.window2 = "black"
        }
        else if (this.onof > 0.5)
        {
            this.window2 = "yellow"
        }
    }

    drawHouse(x, y)
    {
        this.g.fillStyle = "gray"
        this.g.fillRect(x+0, y+25, 50, 45)

        this.drawTriangle("red", x+25, y+0, x+0, y+25, x+50, y+25)

        
        this.g.fillStyle = this.window1
        this.g.fillRect(x+5, y+32.4, 12.45, 12.45)
        this.g.fillStyle = this.window2
        this.g.fillRect(x+25, y+32.4, 12.45, 12.45)
    }

    
    drawChristmasTree(x, y)
    {
        this.drawTriangle("green", x+16.6, y+0, x+0, y+50, x+33.3, y+50)
        this.g.fillStyle = "brown"
        this.g.fillRect(x+12, y+50, 10, 15)
        this.g.fillStyle="yellow"
        for (let i = 0; i < 10; i++)
        {
            for (let i = 0; i < 1; i++)
            {
                let random1=Math.floor(Math.random() * 13.3) - 4
                let random2=Math.floor(Math.random() * 30) + 1
                this.drawBall("yellow", random1+x+15.3, random2+y+15.3, 3.3)
            }
        }
        this.drawSquare("red", x+0, y+36.6, x+0, y+33.3, x+30, y+23.3, x+30, y+26.6)
        this.drawCone("blue", x+11, y+0, 0.05)
        
    }

    drawCone(color, x, y, size)
    {
        this.g.fillStyle = color;
        this.g.beginPath();
        this.g.moveTo(x+108*size, y+0.0);
        this.g.lineTo(x+141*size, y+70*size);
        this.g.lineTo(x+218*size, y+78.3*size);
        this.g.lineTo(x+162*size, y+131*size);
        this.g.lineTo(x+175*size, y+205*size);
        this.g.lineTo(x+108*size, y+170*size);
        this.g.lineTo(x+41.2*size, y+205*size);
        this.g.lineTo(x+55*size, y+131*size);
        this.g.lineTo(x+1*size, y+78*size);
        this.g.lineTo(x+75*size, y+68*size);
        this.g.lineTo(x+108*size, y+0);
        this.g.closePath();
        this.g.fill();
    }

    drawBall(color, a, b, c)
    {
        this.g.beginPath();
        this.fillStyle = color
        this.g.arc(a, b, c, 0, Math.PI*2)
        this.g.stroke();
        this.g.fill();
        this.g.closePath();

    }

    drawSquare(color, a, b, c, d, e, f, g, h)
    {
        let scope = this
        scope.g.beginPath();
        scope.g.fillStyle = color;
        scope.g.moveTo(a, b);
        scope.g.lineTo(c, d);
        scope.g.lineTo(e, f);
        scope.g.lineTo(g, h)
        scope.g.closePath();
        scope.g.stroke();
        scope.g.fill();  
    }

    drawTriangle(color, a, b, c, d, e, f)
    {
        this.g.beginPath();
        this.g.fillStyle = color;
        this.g.moveTo(a, b);
        this.g.lineTo(c, d);
        this.g.lineTo(e, f);
        this.g.closePath();
        this.g.stroke();
        this.g.fill();
    }
}

let app = new App;
app.init();