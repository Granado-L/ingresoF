/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/function mostrar() {


	let nombre;
	let peso;
	let sexo;
	let edad;
	let contadorFemenino = 0;
	let promedioEdad;
	let contadorEdad = 0;
	let acumuladorEdad = 0;
	let flag = 0;
	let acumuladorPeso = 0;




	for (let i = 0; i < 5; i++) {

		nombre = prompt("Ingrese nombre");
		while (!(isNaN(nombre))) {
			nombre = prompt("Error. Ingrese nombre");
		}

		peso = parseFloat(prompt("Ingrese el peso"));
		while (isNaN(peso)) {
			peso = parseFloat(prompt("Error. Ingrese el peso"));
		}
		acumuladorPeso = acumuladorPeso + peso;

		sexo = prompt("Ingrese sexo (m-f)");
		while (sexo != "f" && sexo != "m") {
			sexo = prompt("Error. Ingrese sexo (m-f)");
		}

		edad = parseInt(prompt("Ingrese la edad"));
		while (isNaN(edad)) {
			edad = parseInt(prompt("Error. Ingrese la edad"));
		}
		acumuladorEdad = acumuladorEdad + edad;
		contadorEdad++;

	}

	switch(sexo){
		case "f":
			contadorFemenino++;
			console.log("Hay " + contadorFemenino + " mujeres");
		break;
	}

	if (flag == 0 || sexo == "m") {
		acumuladorPeso = peso;
		flag == 1;
		console.log("EL hombre mas pesado pesa: " + acumuladorPeso + " kilos");
	}

	promedioEdad = acumuladorEdad / contadorEdad;
	console.log("El promedio de edad es de: " + promedioEdad);















































}

