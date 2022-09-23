class Pessoa{
    constructor(nome) {
        this.nome = nome;
    }

    falar(frase){
        console.log(this.nome + " disse: " + frase);
    }
}

class Aluno extends Pessoa {
    Estudar(disciplina) {
    console.log(this.nome + " Estuda: " + disciplina)
    }
}

class Professor extends Pessoa {
    Ensinar(disciplina) {
    console.log(this.nome + " ensina: " + disciplina)
    }
}

var p1 = new Professor("Francisco");

p1.falar("oi, tudo bem?")
p1.falar("Como vai?")
p1.Ensinar("Biologia")