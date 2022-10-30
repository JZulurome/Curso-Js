//primer problema

let free = false;

const validarCliente = (time)=>{
    let edad = prompt("cual es tu edad?");

    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert('son las ${time}:00hs podes pasar gratis porque fuiste la primer persona en entrar despues de las 2AM');
            free = true;
        } else {
            alert(`son las ${time}:00hs podes pasar pero tienes que pagar`)
        }
    
    } else {
        alert('no pasas papi mala mia');
    }
}

//segundo problema
//Crear mini-sistema que nos permita registrar los alumnos que estan presentes (P) y ausentes (A) en clase
//Pasados los 30 dias mostrar la situacion final de todos los alumnos ( Numero total de presentes y ausentes)
//Se puede tener un maximo de 10% de ausencias por semestre, si se tiene mas aclarar que esta reprobado

const segundoProblema = () => {
let cantidad = prompt("cuantos alumnos son?");
let alumnosTotales = [];

    for (i = 0; i < cantidad; i++){
        alumnosTotales[i] = [prompt("Nombre del alumno " + (i + 1)),0];
    }


const tomarAsistencia = (nombre, p)=> {
    let presencia = prompt(nombre);

    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++){
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0],alumno)
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ______________Asistencias: ${alumnosTotales[alumno][1]} <br>
    ______________Presentes: ${30 - alumnosTotales[alumno][1]} <br> <br>`;

    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado += "Reprobado por inasistencias <br><br>"
    } else {
        resultado += "<br><br>"
    } document.write(resultado);
}
}


//tercer problema 
//calculadora

const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}

const multi = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}

const divi = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}

alert('que operacion deseas realizar?');
operacion = prompt("1: suma, 2: resta, 3: multiplicacion, 4: division");

if (operacion == 1) {
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = suma(numero1, numero2)
    alert(`tu resultado es ${resultado}`)
}

else if (operacion == 2) {
    let numero1 = prompt("primer numero para restar");
    let numero2 = prompt("segundo numero para restar");
    resultado = restar(numero1, numero2)
    alert(`tu resultado es ${resultado}`)
} 

else if (operacion == 3) {
    let numero1 = prompt("primer numero para multiplicar");
    let numero2 = prompt("segundo numero para multiplicar");
    resultado = multi(numero1, numero2)
    alert(`tu resultado es ${resultado}`)
} 

else if (operacion == 4) {
    let numero1 = prompt("primer numero para dividir");
    let numero2 = prompt("segundo numero para dividir");
    resultado = divi(numero1, numero2)
    alert(`tu resultado es ${resultado}`)
} 

else {
    alert('no se ha encontrado la operacion')
}