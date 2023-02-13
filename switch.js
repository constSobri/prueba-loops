// Este codigo basicamente comprueba si la variable coincide con alguno de los siguientes casos y ejectuta una impresion dependiendo de lo que escribas, con un default includio para casos no referentes al tema.

let estacion = "Carlos";

switch (estacion) {
  case "Invierno":
    console.log("q frio :,)");
    break;
  case "Verano":
    console.log("q calor :|");
    break;
  case "Otono":
    console.log("no tengo la letra ene xD");
    break;
  case "Primavera":
    console.log("A ver a la prima Vera");
    break;
  default:
    console.log("No se que escribiste, sorry");
}
