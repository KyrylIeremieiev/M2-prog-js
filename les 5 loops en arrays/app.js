class App
{
    runApplication()
    {
        let arr = ["reformed orthodox rabbi, Bill Clinton", "heb geen", "John elden ring", "Anatoly karpov", "Fidel Castro"]
        console.log(arr)
        let header = document.getElementsByClassName("header")
        for(let i =0; i < header.length; i++)
        {
            header[i].innerHTML = arr[i]
        }
        
    }
}

let app = new App();
app.runApplication();