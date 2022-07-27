function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Monique',
	idade: 30,
};

const pessoa2 = {
	nome: 'Lara',
	idade: 5,
};

const pessoa3 = {
	nome: 'Alex',
	idade: 40,
};

console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.apply(pessoa2, [24]));
