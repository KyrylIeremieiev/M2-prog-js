class App
{
    runApplication()
    {
        button.addEventListener('click', ()=>{
            const para = document.createElement("p");
            const node = document.createTextNode("This is a new paragraph.");
            para.appendChild(node);
            const element = document.getElementById("div1");
            element.appendChild(para);
        });
    }
}

let app = new App
app.runApplication()