class Coche {
    constructor(){
        this.modelo = '';
        this.velocidad = '';
        this.antiguedad = '';
    }

    aumentarVelocidad(){
        this.velocidad += 1;
    }

    reducirVelocidad(){
        this.velocidad -= 1;
    }
}

var coche1 = new Coche('BMW', 200, 2017);
var coche2 = new Coche('Audi', 100, 2018);
var coche3 = new Coche('Mercedes', 200, 2017);
var coche4 = new Coche('Renault', 200, 2017);

document.write("<h1>Velocidad:"+coche1.velocidad+"<h1>");
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
document.write("<h1>Velocidad:"+coche1.velocidad+"<h1>");