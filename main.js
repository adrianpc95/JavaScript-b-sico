
var nombre = "Adrian Piñol";
var altura = 175;


/*
var concatenacion = nombre + " " + altura;

var datos = document.getElementById('datos');
datos.innerHTML = `
    <h1> Soy la caja de datos</h1>
    <h2> Mi nombre es: Adrian</h2>
    <h3> Mido: 175 cm</h3>
`;

if(altura >= 175){
    datos.innerHTML += "<h1>Eres una persona alta</h1>";
}

for(var i = 2000; i<= 2020; i++){
    // bloque de instrucciones
    datos.innerHTML += "<h2>Estamos en el año: "+i;

}

*/

function MuestraMiNombre(nombre, altura){
    var misDatos = `
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mido: ${altura} cm</h3>
    `;

    return misDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Adrián Piñol", 175);
}

imprimir();

var nombres = ['Adrian', 'Antonio', 'Jorge'];

/*
document.write('<h1>Listado de nombres</h1>')
for (i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '<br/>');
}
*/
nombres.forEach((nombre) => {
    document.write(nombre + '<br/>');
});