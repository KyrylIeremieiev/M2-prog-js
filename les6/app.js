class App
{
    runApplication()
    {
        let myCanvas = document.getElementById("canvas");
        let g = myCanvas.getContext("2d");

        myCanvas.addEventListener('mousemove', (evt)=>{
            let mousePos = this.getMousePos(myCanvas, evt)
            g.clearRect(0, 0, myCanvas.width, myCanvas.height);
            g.beginPath();
            g.fillStyle = "green"
            g.rect(mousePos.x, mousePos.y, 30, 30)
            g.stroke();
            g.fill();
        });
    }

    getMousePos(myCanvas, evt)
    {
        let rect = myCanvas.getBoundingClientRect();
        return{
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        }
    }
}
let app = new App
app.runApplication()