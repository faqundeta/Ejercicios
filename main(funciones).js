function calcularAreaRectangulo(base, altura) {
	const resultado = base * altura

	return resultado
}

console.log(calcularAreaRectangulo(10, 7))

function precioTotal(precio, cantidad, envio) {
	const costo = precio * cantidad + envio

	return costo
}

console.log(precioTotal(10, 10, 40))


function dejarPasar(edad) {
	const esMayor = edad >= 18

	return esMayor
}

console.log(dejarPasar(20))

