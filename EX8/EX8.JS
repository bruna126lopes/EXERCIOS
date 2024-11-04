function calcularSalario(ganhoPorHora, horasTrabalhadas) {
    return ganhoPorHora * horasTrabalhadas;
}

var ganhoPorHora = parseFloat(prompt("Quanto você ganha por hora?: "));
var horasTrabalhadas = parseInt(prompt("Quantas horas você trabalha por mês?: "));

var salarioTotal = calcularSalario(ganhoPorHora, horasTrabalhadas);

console.log("Seu salário é de: " + salarioTotal);
alert("Seu salário é de: " + salarioTotal);
