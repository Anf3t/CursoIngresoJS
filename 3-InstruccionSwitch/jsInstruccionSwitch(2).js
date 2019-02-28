function mostrar()
{
//tomo la edad  
var mesDelAño
var msj

mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case"Julio":
	case"Agosto":
		msj="Abrigate que hace frio";
		break;
	case"Enero":
	case"Febrero":
	case"Mayo":
	case"Marzo":
	case"Abril":
	case"Junio":
		msj="Falta para el invierno";
		break;
	case"Septiembre":
	case"Octubre":
	case"Noviembre":
	case"Diciembre":
		msj="Ya pasamos el frio, ahora calor!!!.";
		break;											
}

alert(msj);




}//FIN DE LA FUNCIÓN