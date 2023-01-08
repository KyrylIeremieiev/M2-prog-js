class App
{
    runApplication()
    {
        let canvas = document.getElementById("CID");
        console.log(canvas);
        this.g = canvas.getContext("2d");
        this.drawSquare("red", 30, 10, 20, 30, 60, 40, 70, 20);
        this.drawSquare("gray", 20, 30, 20, 50, 60, 60, 60, 40);
        this.drawSquare("gray", 20, 30, 20, 50, 60, 60, 60, 40);
        this.drawSquare("gray", 60, 40, 80, 30, 80, 50, 60, 60);
        this.drawTriangle("gray", 60, 40, 80, 30, 70, 20);
        this.drawSquare("white", 70, 45, 70, 50, 75, 50, 75, 45);
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