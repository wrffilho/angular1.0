var produto = {nome:"sapato", preco:150};

var formulaImpostoA = function(preco){return preco*0.1;};

var calcularPreco = function(produto, formulaImposto){
	console.log(formulaImposto);
	return produto.preco+formulaImposto(produto.preco);
}



console.log(calcularPreco(produto, formulaImpostoA));


