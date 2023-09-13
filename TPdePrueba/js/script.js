
console.log("Hola");
const Persona = {
    nombre: "Tomás", 
    edad: 17, 
    mayorDeEdad: false, 
    null: null
    // clasesQueTiene: [
    //     "matematica", 
    //     "lengua", 
    //     "programacion"
    // ],
}
console.log("Hola, " + Persona.nombre + "!");

for (const propiedad in Persona){
    console.log(`${propiedad} : ${Persona[propiedad]}`);
    //es lo mismo a console.log(propiedad + ":" + Persona[propiedad]);
}


//crear un array de 5 puertas bancarias. cada una con el cbu, saldo actual, nombre y apellido del beneficiario de la cuenta, y un bool sobre si la cuenta esta activa o no. 
//1) hacer promedio de saldos. 
//2) obtener una lista con las cuentas con mas de 10000 pesos. 
//3) Ingresar un CBU y mostrar todos los datos de esa cuenta. 
//4)Ingresar un CBU y eliminar esa cuenta de la lista de puertas bancarias. 
const Cuenta1 = {
cbu: 47394082,
saldoActual: 10, 
nombre: "Tomás", 
apellido: "FZ", 
cuentaActiva: false,
}

const puertasbancarias = [
    Cuenta1, 
    {
        cbu: 222323,
        saldoActual: 10000, 
        nombre: "Pedro", 
        apellido: "SAS", 
        cuentaActiva: true,
    }, 
    {
        cbu: 12,
        saldoActual: 10, 
        nombre: "Benja", 
        apellido: "SAS", 
        cuentaActiva: true,
    },
    {
        cbu: 34,
        saldoActual: 2000, 
        nombre: "Bruce Wayne", 
        apellido: "SAS", 
        cuentaActiva: true,
    },
    {
        cbu: 56,
        saldoActual: 10, 
        nombre: "Humano", 
        apellido: "ApellidoHumano", 
        cuentaActiva: false,
    },

]


//promedio saldos. Ver si es correcto. 

let sumaSaldos = 0;
for(const i of puertasbancarias){
    console.log("i.saldoActual: " + i.saldoActual);
    sumaSaldos = sumaSaldos + i.saldoActual; 
    console.log(sumaSaldos);
}
console.log("Suma de saldos: " + sumaSaldos);  
let promedio = sumaSaldos / puertasbancarias.length;
console.log("Promedio de saldos: " + promedio);
//lista 

console.log("LISTA ej 2")
//version larga: 
// let listaMayoraMil=[];
// for(const i of puertasbancarias){
//     if(i.saldoActual > 1000){
//         console.log("saldo mayor")
//         listaMayoraMil.push(i);
//     }
// }

// for(const i of listaMayoraMil){
//     console.log(i);
// }

//version corta:

console.log("Lista de Saldos:")
const listaMayoraMil = puertasbancarias.filter(p => p.saldoActual > 1000);
for(const i of listaMayoraMil){
    console.log(i.saldoActual)
    console.log(i.cbu)
}

//Ingresar un CBU y mostrar datos cuenta. 

let texto = prompt("Ingrese su CBU");
for(const i of puertasbancarias){
    if(texto == i.cbu){
        console.log("Datos de la cuenta:");
        console.log(i.apellido, i.nombre);
        console.log(i.saldoActual);
        console.log(i.cuentaActiva);
    }
}


//Ingresar CBU y eliminar datos cuenta. 

let texto2 = prompt("Ingrese su CBU");
let listaResultante;
for(const i of puertasbancarias){
    if(texto2 == i.cbu){
        listaResultante = puertasbancarias.filter(p => texto2 != p.cbu);
    }
}

for(const i of listaResultante){
    console.log(i.nombre);
}