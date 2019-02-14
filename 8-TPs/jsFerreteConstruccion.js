/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largor;
	var anchor;
	var rectangulo;
	var alambre1;


	largor=document.getElementById('Largo').value;
	anchor=document.getElementById('Ancho').value;

	largor=parseInt(largor);
	anchor=parseInt(anchor);

	rectangulo=largor*2+anchor*2;

	alambre1=rectangulo*3;

	alert("Se necesita "+alambre1+" metros de alambre.");
}
function Circulo () 
{
	var radior;
	var diametro;
	var perimetro;
	var alambre2;

	raidor=document.getElementById('Radio').value;

	radior=parseInt(radior);
	
	diametro=radior+radior;
	
	perimetro=diametro*3.1416;

	alambre2=perimetro*3;

	alert(alambre2);
}
function Materiales () 
{
	var ancho2;
	var alto2;
	var area;
	var cemento;
	var cal;
	var material;

	ancho2=document.getElementById('Ancho').value;
	alto2=document.getElementById('Largo').value;

	area=ancho2*alto2;

	cemento=area*2;

	cal=area*3;

	alert("Se necesitan "+cemento+" bolsas de cemento y "+cal+" de cal");
	
}