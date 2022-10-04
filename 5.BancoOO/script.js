class Conta{
    
    constructor (agencia, conta, nome, saldo){
        this.movimentações = [];// construtor do array de extrato
		this.agencia = agencia ;
		this.conta = conta;
        this.nome = nome;
		this.saldo = saldo;
    }

    getDetalhes(){
        return "Nome: "+this.nome+" | Agência: "+ this.agencia +" | Conta: "+ this.conta+ " | Saldo: "+ this.saldo;
    }

    Depositar(valor){
        this.saldo+=valor;
        this.movimentações.push('\nDepósito efetuado de: '+valor+' reais');
        return "Depósito de:"+valor +" |  Saldo atual:"+this.saldo;
    }

    extrato(){

        return this.getDetalhes()+'\n'+this.movimentações;
    }
}

class Poupança extends Conta{

    transferir(Conta,valor){
        if(this.saldo>=valor){
            Conta.saldo +=valor;
            this.saldo -=valor;
            this.movimentações.push('\nTransferência efetuado de: '+valor+' reais para a: '+Conta.nome+' | Agência: '+Conta.agencia);
            Conta.movimentações.push('\nTransferência recebida de: '+valor+' reais da: '+this.nome+' | Agência: '+this.agencia);
            return "Transferência de: "+valor +" reais efetuada "+" |  Saldo atual: "+this.saldo;
        }
        else{
            return "Transferência não autorizada. |  Saldo atual:"+this.saldo + " |  Limite:"+ this.limite;
        }
    }
    saque(valor){
        if(this.saldo>=valor){
            this.saldo-+valor;
            this.movimentações.push('\nSaque de:'+valor+' reais efetuado com sucesso!');
            return "Saque de: "+valor +" |  Saldo atual: "+this.saldo; 
        }
        else{
            return "Saque não autorizado. |  Saldo atual: "+this.saldo;
        }
    }

}
class Corrente extends Conta{
    constructor(agencia,conta,nome,saldo,limite){
        super(agencia,conta,nome,saldo);
        this.limite=limite;
    }
    getDetalhes(){
        return "Nome: "+this.nome+" | Agência: "+ this.agencia +" | Conta: "+ this.conta+ " | Saldo: "+ this.saldo+" | Limite: "+this.limite;

    }
    transferir(Conta,valor){
        if((this.saldo+this.limite)>=valor){
            Conta.saldo +=valor;
            this.saldo -=valor;
            this.movimentações.push('\nTransferência efetuado de: '+valor+' reais para a: '+Conta.nome+' | Agência:'+Conta.agencia);
            Conta.movimentações.push('\nTransferência recebida de: '+valor+' reais da: '+this.nome+' | Agência: '+this.agencia);
            return "Transferência de: "+valor +" reais efetuada "+" |  Saldo atual: "+this.saldo;
        }
        else{
            return "Transferência não autorizada. |  Saldo atual: "+this.saldo + " |  Limite: "+ this.limite;
        }
    }

    saque(valor){
        if((this.saldo + this.limite )>=valor){
            this.saldo-+valor;
            this.movimentações.push('\nSaque de: '+valor+' reais efetuado com sucesso!');
            return "Saque de: "+valor +" |  Saldo atual: "+this.saldo; 
        }
        else{
            return "Saque não autorizado. |  Saldo atual: "+this.saldo + " |  Limite: "+ this.limite;
        }
    }
}
const b1 = new Corrente(111,222,"Maria",123,444);
const b2 = new Poupança(333,333,"Angela",123,);
console.log(b1.transferir(b2,20));
b1.Depositar(100);
b1.saque(50);
console.log (b1.extrato());
console.log(b2.extrato());