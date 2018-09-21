function salProfessor(hrTrab, vlrHr, desc){
		var salBruto = hrTrab*vlrHr;
		var percDesconto = desc/100;
		var totalDesconto = salBruto*percDesconto;
		var salLiquido = salBruto-totalDesconto;
		var aux = "Salario Bruto: R$ "+salBruto+",\nValor descontado: R$ "+totalDesconto+",\nSalario Liquido: R$ "+salLiquido;
		return aux;
	}

function converterCentEmPes(medMetros){
	const pe = 0.0328084
	return medMetros*pe;
}