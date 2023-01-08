class App
{
    runApplication()
    {
        let canvas = document.getElementById("CID");
        this.g = canvas.getContext("2d");
        for(let i = 0; i < 200; i++)
        {
            this.g.fillStyle="red"
            let x = Math.random()*500
            let y = Math.random()*500
            this.drawBall("red", x, y, 20)
        }
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
}

let app = new App();
app.runApplication();