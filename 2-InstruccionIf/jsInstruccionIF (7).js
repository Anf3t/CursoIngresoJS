function mostrar()
{
//tomo la edad  

	var edadd;
	var ec;

	edadd=document.getElementById('edad').value;
	ec=document.getElementById('estadoCivil').value;


	if(edadd<=18&&ec!="Soltero"){

	   alert("Es muy pequeño para NO ser soltero")
		 }



}//FIN DE LA FUNCIÓN