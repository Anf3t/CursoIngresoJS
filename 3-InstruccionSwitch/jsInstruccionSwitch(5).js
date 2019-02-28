function mostrar()
{
//tomo la edad  
var laHora
var msj

 laHora = document.getElementById('hora').value;

 switch(laHora){
 	case"7":
 	case"8":
 	case"9":
 	case"10":
 	case"11":
 		msj="Es de mañana";
 		break;
 	default:
 		msj="No es de mañana";	
 		break;
 }	
//alert (laHora);
	
	alert(msj);



}//FIN DE LA FUNCIÓN