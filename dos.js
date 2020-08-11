/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar() {
  let marca;
  let precio;
  let peso;
  let tipo;//solido o liquido
  let seguir = "si"
  let acumuladorPeso = 0;
  let flag = 0;
  let acumuladorPrecio = 0;
  let acumuladorMarca = 0;
  let precioMayor;
  let marcaMasCara;
  let precioMenor;
  let marcaMasBarata;
  do {
    marca = prompt("Ingrese la marca");
    while (!(isNaN(marca))) {
      marca = prompt("Error. Ingrese la marca");
    }
    acumuladorMarca = acumuladorMarca + marca;

    precio = parseFloat(prompt("Ingrese precio"));
    while (isNaN(precio)) {
      precio = parseFloat(prompt("Error. Ingrese precio"));
    }
    acumuladorPrecio = acumuladorPrecio + precio;

    peso = parseFloat(prompt("Ingrese el peso en kilogramos"));
    while (isNaN(peso)) {
      peso = parseFloat(prompt("Error. Ingrese el peso en kilogramos"));
    }
    acumuladorPeso = acumuladorPeso + peso;

    tipo = prompt("Ingrese el tipo (solido ó liquido)");
    while (tipo != "solido" && tipo != "liquido") {
      tipo = prompt("Error. Ingrese el tipo (solido ó liquido)");
    }

    seguir = prompt("Quiere seguir ingresando productos? (si-no)");
  } while (seguir == "si");


  console.log("el peso total de todos los productos es: " + acumuladorPeso);

  if (flag == 0 || precio > acumuladorPrecio) {
    acumuladorPrecio = precio;
    precioMayor = acumuladorPrecio;
    flag == 1;
  } else if (precio < acumuladorPrecio) {
    precioMenor = acumuladorPrecio;
  }



  switch (tipo) {
    case "liquido":
      if (flag == 0 || precioMayor > precio) {
        marcaMasCara = marca;
        flag == 1;
      }
      break;
    case "solido":
      if (flag == 0 || precioMenor < precio) {
        marcaMasBarata = marca;
        flag == 1;
      }
      break;

  }

  console.log("Marca mas cara de los liquidos: " + marcaMasCara);
  console.log("Marca mas barata de los solidos: " + marcaMasBarata);











}
