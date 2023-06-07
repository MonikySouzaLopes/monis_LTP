/*
  Os atributos nomes, idade e especie são todos necessários. Assim, usando Try e Catch trate os erros e apresente uma mensagem de erro quando houve atributos vazios.
*/
class MeuErro extends Error {
  constructor(message){
    super(message);
    this.name = "Meu Erro";
  }
}

class Animal {
  constructor(nome, idade, especie) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }

  mostrar(){
    try {
        return this.atributos();
    }catch (error){
       return error

    }
   
}

atributos(){
    if (this.nome != "" && this.idade != "" && this.especie != ""){
        return this.nome + this.sobrenome + this.especie
    }
    else {
        throw new MeuErro("Está faltando algum atributo")
    }
   
   
}
}

const meuAnimal = new Animal("", 3, "cachorro");
console.log(meuAnimal.mostrar());

/*Imprimindo os atributos
console.log(atributos.nome);   
console.log(atributos.idade);  
console.log(atributos.especie); */

