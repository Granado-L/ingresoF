/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexoTitular;
	let lugar;
	let temporada;
	let cantidaDePersonas;
	let seguir = "si";
	let contadorLugar = 0;
	let acumuladorPersonas = 0;
	let contadorPersonas = 0;
	let contadorViajes = 0;
	let contadorBariloche = 0;
	let contadorSalta = 0;
	let contadorCataratas = 0;
	let promedio;

	do{
		sexoTitular=prompt("Ingrese sexo (m-f)");
		while(sexoTitular != "m" && sexoTitular!= "f"){
			sexoTitular=prompt("Error. Ingrese sexo (m-f)");
		}

		lugar=prompt("Ingrese destino (“bariloche”, “cataratas” o “salta”)");
		while(lugar!="bariloche" && lugar!="cataratas" && lugar!="salta"){
			lugar=prompt("Error. Ingrese destino (“bariloche”, “cataratas” o “salta”)");
		}
		contadorLugar++;

		temporada=prompt("Ingrese temporada del año (“otoño”,”invierno, “verano,”primavera”)");
		while(temporada!= "otoño" && temporada!="invierno" && temporada!="verano" && temporada!="primavera"){
			temporada=prompt("Error. Ingrese temporada del año (“otoño”,”invierno, “verano,”primavera”)");
		}

		cantidaDePersonas=parseInt(prompt("Ingrese el numero de personas"));
		while(isNaN(cantidaDePersonas)){
			cantidaDePersonas=parseInt(prompt("Error. Ingrese el numero de personas"));
		}
		acumuladorPersonas=acumuladorPersonas+cantidaDePersonas;
		contadorPersonas++;

		contadorViajes++;
		seguir=prompt("Quiere segir ingresando datos? (si-no)");
	}while(seguir=="si");


	

	switch(lugar){
		case "bariloche":
			contadorBariloche++;
		break;	
		
		case "cataratas":
			contadorCataratas++;
		break;

		case "salta":
			contadorSalta++;
		break;
	}	
	
	if(contadorBariloche>contadorCataratas && contadorBariloche>contadorSalta){
		console.log("El lugar mas elegido es Bariloche");
	}else if (contadorCataratas>contadorBariloche && contadorCataratas>contadorSalta){
		console.log("El lugar mas elegido es Cataratas");
	}else if (contadorSalta>contadorCataratas && contadorSalta>contadorBariloche){
		console.log("El lugar mas elegido es Salta");
	}
		
	if(temporada=="invierno"){
		promedio=acumuladorPersonas/contadorViajes;
		console.log("El promedio de personas por viaje es: " + promedio);
	}



}




	
	



