class App
{
    runApplication()
    {
        let canvas = document.getElementById("CID");
        console.log(canvas);
        this.g = canvas.getContext("2d");
        let rx = Math.random() * 500
        let ry = Math.random() * 500
        this.random()
        this.drawHouse(rx, ry)
        this.drawChristmasTree(0, 10)
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

    drawChristmasTree(x, y)
    {
        this.drawTriangle("green", x+50, y+0, x+0, y+150, x+100, y+150)
        this.g.fillStyle = "brown"
        this.g.fillRect(x+36, y+150, 30, 45)
        this.g.fillStyle="yellow"
        for (let i = 0; i < 10; i++)
        {
            for (let i = 0; i < 2; i++)
            {
                let random1=Math.floor(Math.random() * 40) - 10
                let random2=Math.floor(Math.random() * 90) + 1
                this.drawBall("yellow", random1+x+46, random2+y+46, 10)
            }
        }
        this.drawSquare("red", x+0, y+110, x+0, y+100, x+90, y+70, x+90, y+80)
        this.drawCone("blue", x+33, y+0, 0.15)

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


    drawHouse(x, y)
    {
        this.g.fillStyle = "gray"
        this.g.fillRect(x+0, y+50, 100, 50)

        this.drawTriangle("red", x+50, y+0, x+0, y+50, x+100, y+50)

        this.g.fillStyle = this.window1
        this.g.fillRect(x+10, y+65, 25, 25)
        this.g.fillStyle = this.window2
        this.g.fillRect(x+50, y+65, 25, 25)
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

let app = new App();
app.runApplication();