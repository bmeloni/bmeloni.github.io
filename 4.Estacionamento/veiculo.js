Veiculo.prototype.getId = function() {
    return this.id;
};

Veiculo.prototype.getPlaca = function() {
    return this.placa;
};

Veiculo.prototype.getModelo = function() {
    return this.modelo;
};

Veiculo.prototype.getMarca = function() {
    return this.marca;
};
Veiculo.prototype.getCor = function() {
    return this.cor;
};
Veiculo.prototype.getProprietario = function() {
    return this.nomeProprietario;
};

export function Veiculo(id,placa,modelo,marca,cor,nomeProprietario) {
    this.id = id;
    this.placa = placa;
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
    this.nomeProprietario = nomeProprietario;
}

export function Carro(placa,modelo,marca,cor,nomeProprietario,portas) {
    Veiculo.call(
        this,
        "id-" + placa.replaceAll("-", "").toLowerCase(),
        placa,
        modelo,
        marca,
        cor,
        nomeProprietario
    );
    this.portas = portas;
}

Carro.prototype.getPortas = function() {
    return this.portas;
}

Carro.prototype = Object.create(Veiculo.prototype);
Carro.prototype.calcularValorPago = function(horaEntrada, horaSaida) {
    let difference = (horaSaida - horaEntrada) / 60000;
    if (difference <= 15) {
        return 0;
    } else if (difference >= 60 && difference < 240) {
        return 4 * (difference / 60);
    } else {
        return 20;
    }
};

export function Moto(placa,modelo,marca,cor,nomeProprietario) {
    Veiculo.call(
        this,
        "id-" + placa.replaceAll("-", "").toLowerCase(),
        placa,
        modelo,
        marca,
        cor,
        nomeProprietario
    );
}

Moto.prototype = Object.create(Veiculo.prototype);
Moto.prototype.calcularValorPago = function (horaEntrada, horaSaida) {
    let difference = (horaSaida-horaEntrada)/60000;
    if (difference <= 30) {
        //30min
        return 0;
    } else if (difference >= 60 && difference<240) {
        return 2 * (difference/60);
    } else {
        return 10;
    }
};