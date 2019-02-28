function mostrar()
{
//tomo la edad  
var mesDelAño
var msj

mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){
	case"Febrero":
		msj=28;
		break;
	case"Abril":
	case"Junio":
	case"Septiembre":
	case"Noviembre":
		msj=30;
	default:
		msj=31;
		break;

}

//alert (mesDelAño);
	alert("Este mes tiene "+msj+" dias");
	



}//FIN DE LA FUNCIÓN