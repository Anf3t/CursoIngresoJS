/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var as;
	
	

	precio1=document.getElementById('PrecioUno').value;
	precio2=document.getElementById('PrecioDos').value;
	precio3=document.getElementById('PrecioTres').value;
	
	precio1=parseInt(precio1);
	precio2=parseInt(precio2);
	precio3=parseInt(precio3);

	as=precio1+precio2+precio3;


	alert("La suma total de los precios es "+as)

	
}
function Promedio () //el resultado divido la cantida de numeros sumados
{
	var precio1;
	var precio2;
	var precio3;
	var promedio1;
	

	precio1=document.getElementById('PrecioUno').value;
	precio2=document.getElementById('PrecioDos').value;
	precio3=document.getElementById('PrecioTres').value;
	
	precio1=parseInt(precio1);
	precio2=parseInt(precio2);
	precio3=parseInt(precio3);
	
	promedio1=(precio1+precio2+precio3)/3;

	alert("El promedio es "+promedio1)
}
function PrecioFinal () 
{
	
}