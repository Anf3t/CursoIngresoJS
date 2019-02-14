function mostrar()
{
//tomo la edad  
var años;

años=document.getElementById('edad').value;
	
	if(años<=13){
		alert("Usted es menor de edad")
	}else{
		if(años<17){
			alert("Usted es adolescente")
		}
		else{
			alert("Usted es mayor")
		}
	}


}//FIN DE LA FUNCIÓN