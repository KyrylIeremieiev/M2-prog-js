class Dino
{
    constructor(naam, vleeseter, leeftijd)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = true;
        this.honger = true;

    }

    eetDino()
    {
       Dino.leeft = false;
       console.log("Trex eet de dino Stego") 
    }

    eetPlant()
    {
        console.log("Stego eet plant gras")
    }
}

class Plant
{
    constructor(naam)
    {
        this.naam = naam;
    }
}

class App
{
    constructor()
    {
        this.dino = new Dino
        this.plant = new Plant
    }
    runApplication()
    {
        let trex = new Dino("trex", true, 9223372036854775807)
        let Stego = new Dino("Stego", false, 12)
        let pteradactil = new Dino("pteradactil", true, 900)
        let gras = new Plant("gras")
        console.log(pteradactil)
        console.log(Stego)
        console.log(trex)
        console.log(gras)
        this.dino.eetPlant()
        this.dino.eetDino()
    }
}

let app = new App();
app.runApplication();