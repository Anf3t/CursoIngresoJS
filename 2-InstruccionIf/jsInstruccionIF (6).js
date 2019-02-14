function mostrar()
{
//tomo la edad  
var años;

años=document.getElementById('edad').value;
	if(años>=18){
		alert("Usted es mayor de edad")
	}
	if(años==13||años==14||años==15||años==16||años==17){
		alert("Usted es adolescente")
	}
	
	if(años<=13){
		alert("Usted es menor de edad")
	}


}//FIN DE LA FUNCIÓN