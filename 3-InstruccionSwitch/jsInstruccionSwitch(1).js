function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var msj

mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case"Enero":
		msj="que comiences bien el año";
		break;

	case"Marzo":
		msj="a clases!!!";
		break;

	case"Julio":
		msj="Se vienen las vacaciones";
		break;

	case"Diciembre":
	 	msj="Felices fiesta!!!.";	
		break;

	default:
		msj="Buena suerte";
		break;	

}
alert(msj);



}//FIN DE LA FUNCIÓN