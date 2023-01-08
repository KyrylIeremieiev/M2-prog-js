class App
{
    runApplication()
    {
        let randomGetal = Math.random();
        if (randomGetal == 0)
        {
            nt.style.backgroundColor ="#99FF99";
        }
        else if (randomGetal < 0.2)
        {
            nt.style.backgroundColor ="#9999";
        }
        else if (randomGetal => 0.2 && randomGetal < 0.6)
        {
            nt.style.backgroundColor ="#888889";
        }
        else if (randomGetal > 0.6)
        {
            nt.style.backgroundColor ="#000000";
        }
       
    }
}

let app = new App();
app.runApplication();