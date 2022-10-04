class Contato {
    constructor(id,nome,telefone){
        this.id = id
        this.nome = nome
        this.telefone = telefone
    }
}

class Agenda {
    constructor(){
        this.contatos = []
    }
    inserir(contato) {
         this.contatos.push(contato)
    }
    remover(id){
		console.log("Removendo o contato "+id);
        this.contatos = this.contatos.filter((value,index,arr)=>{
            return value.id !== id
        })
        return this.contatos
    }
    buscar(id){
		console.log("Buscando o contato "+id);
        return this.contatos.filter((value,index,arr)=>{
            return value.id === id
        })
    }
    listar(){
		console.log("Lista:");
        return this.contatos.sort((a,b)=> {
            if(a.nome > b.nome){
                return 1;
            }
            if(a.nome < b.nome){
                return -1;
            }
            return 0;
        })
    }
}

const agenda = new Agenda();

agenda.inserir(new Contato(01,"Maria","1999912223"));
agenda.inserir(new Contato(02,"Ricardo","4399912523"));
agenda.inserir(new Contato(08,"Gabriela","1292912273"));
agenda.inserir(new Contato(05,"Laura","14994912923"));

console.log(agenda.listar());
console.log(agenda.remover(01));
console.log(agenda.buscar(05));
console.log(agenda.listar());