/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var a;
	var b;

	a=document.getElementById('numeroUno').value;
	b=document.getElementById('numeroDos').value,

	a=parseInt(a);
	b=parseInt(b);

	alert(a+b);

}

