/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var a;
	var b;

	a=document.getElementById('').value
	b=document.getElementById('').value

	a=parseInt(a);
	b=parseInt(b);

	alert(a+b);
	
}

function restar()
{
	var a;
	var b;

	a=document.getElementById('').value;
	b=document.getElementById('').value;
	
	alert(a-b);
}

function multiplicar()
{ 
	var a;
	var b;

	a=document.getElementById('').value;
	b=document.getElementById('').value;

	alert(a*b);
}

function dividir()
{
	var a;
	var b;

	a=document.getElementById('').value;
	b=document.getElementById('').value;

	alert(a/b);
}

