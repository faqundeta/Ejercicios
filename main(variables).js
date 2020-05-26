const miComidaPreferida = {
	nombre: 'milanesa con pure',
	cantidadDeVecesQueComi: 4,
	cantidaDeVecesQueMeCocinaron: 7,
	ingredientes: ['milanesa', 'limon', 'pure', 'mayonesa'],
} 

miComidaPreferida.llevaMasDeCincoIngredientes = miComidaPreferida.ingredientes > 5

miComidaPreferida.cantidadDeVecesQueMeCocine = miComidaPreferida.cantidaDeVecesQueMeCocinaron - miComidaPreferida.cantidadDeVecesQueComi

console.log(miComidaPreferida.cantidadDeVecesQueMeCocine)