function mostrar()
{
//tomo la edad  
var mesDelAño
var msj

mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){

case"Febrero":
	msj="Este mes no tiene mas de 29 dias";
	break;

default:
	msj="Este mes tiene 30 o mas dias";
	break;
}
//alert (mesDelAño);
	alert(msj);
	


}//FIN DE LA FUNCIÓN