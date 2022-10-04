Estacionamento.prototype.estacionar = function (veiculo, horaEntradaVeiculo) {
    if (this.numeroDeVagas === 0) {
        console.log("Estacionamento lotado");
        return;
    }

    let element = {};

    element.veiculo = veiculo;
    element.horaEntradaVeiculo = horaEntradaVeiculo;
    element.horaSaidaVeiculo = undefined;

    this.estacionamento.push(element);
    this.numeroDeVagas -= 1;

    console.log("Veiculo estacionado:" + veiculo.id);
};

Estacionamento.prototype.liberar = function (idVeiculo, horaSaidaVeiculo) {
    let veiculo = {};
    let horaEntradaVeiculo;

    this.estacionamento.forEach((e) => {
        if (e.veiculo.getId() === idVeiculo) {
            veiculo = e.veiculo;
            horaEntradaVeiculo = e.horaEntradaVeiculo;
            if (e.horaSaidaVeiculo === undefined) e.horaSaidaVeiculo = horaSaidaVeiculo;
            else veiculo = undefined;
            return;
        }
    });

    if (veiculo === undefined) {
        console.log("Veiculo não encontrado: " + idVeiculo);
        return;
    }

    this.saldo += veiculo.calcularValorPago(horaEntradaVeiculo, horaSaidaVeiculo);
    console.log("Veiculo liberado:" + veiculo.id);
    this.numeroDeVagas += 1;
};

Estacionamento.prototype.gerarRelatorio = function () {
    console.log("\nRelatorio");

    console.log("Vagas livres: " + this.numeroDeVagas);
    this.getSaldo();
    let formatter = new Intl.DateTimeFormat("pt-BR", {
        dia: "2-digit",
        mês: "2-digit",
        ano: "2-digit",
        horas: "2-digit",
        minutos: "2-digit",
        segundos: "2-digit",
    });
    
    console.log("\nHistórico:");
    this.estacionamento.forEach((e) => {
            console.log(
                e.veiculo.getMarca(),
                e.veiculo.getCor(),
                "Proprietario: ",
                e.veiculo.getProprietario() + ",",
                "Placa: ",
                e.veiculo.getPlaca()
            );
        
        console.log(
            "\tHora entrada: " + formatter.format(new Date(e.horaEntradaVeiculo))
        );
        if (e.horaSaidaVeiculo == undefined) {
            console.log("\tHora saida: Ainda estacionado.");
        } else {
            console.log(
                "\tHora saida: " + formatter.format(new Date(e.horaSaidaVeiculo))
            );
            console.log(
                "\tTotal pago:",
                new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(
                    e.veiculo.calcularValorPago(e.horaEntradaVeiculo, e.horaSaidaVeiculo)
                )
            );
        }
    });
};

Estacionamento.prototype.getSaldo = function () {
    let formatter = Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    console.log("Saldo atual: " + formatter.format(this.saldo));
};

export function Estacionamento(numeroDeVagas = 20) {
    this.numeroDeVagas = numeroDeVagas;
    this.estacionamento = [];
    this.saldo = 0;
    console.log("Estacionamento criado com " + numeroDeVagas + " vagas");
}