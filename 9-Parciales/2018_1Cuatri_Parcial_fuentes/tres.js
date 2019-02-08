function mostrar()
{
	var precio;
	var descuento;
	var final;

	precio=prompt("Precio ");
	descuento=prompt("Descuento de ");

	final=precio*descuento/100;

	document.getElementById('elPrecioFinal').value=precio-final;

}
