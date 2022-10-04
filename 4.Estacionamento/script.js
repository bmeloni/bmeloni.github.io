import {Estacionamento} from "./estacionamento.js";
import {Carro,Moto} from "./veiculo.js";

const e = new Estacionamento();

e.estacionar(
    new Carro("VXS-1023","Honda","Fit","Cinza","Ana","4"),
    //new Date (ano,mês,dia,hora.minutos,segundos,ms).getTime()
    new Date(2022,3, 25, 2, 32, 0, 0).getTime()
);

e.estacionar(
    new Carro("MXW-9753","New Fiesta","Ford","Branco","Jão","2"),
    new Date(2022,3, 10, 8, 24, 32, 0).getTime()
);

e.estacionar(
    new Moto("BCE-4786","YZF R6","Yamaha","Preta","Mariana"),
    new Date(2022,3, 13, 12, 43, 0, 0).getTime()
);

e.estacionar(
    new Moto("LAS-1520","Elite 125","Honda","Vermelho","Rodrigo"),
    new Date(2022,3, 13, 12, 43, 0, 0).getTime()
);

e.estacionar(
    new Carro("PYH-2654","Argo","Fiat","Branco","Bruna","4"),
    new Date(2022,3, 13, 12, 43, 0, 0).getTime()
);

e.estacionar(
    new Carro("VEG-4824","Kicks","Nissan","Chumbo","Romeu","4"),
    new Date(2022, 9, 13, 12, 43, 0, 0).getTime()
);

//new Date (ano,mês,dia,hora,min,seg,ms)
e.liberar("id-las1520", new Date(2022,8,13,13,43,0,0).getTime());
e.liberar("id-veg4824", new Date(2022,5,13,14,43,0,0).getTime());
e.liberar("id-mxw9753", new Date(2022,4,13,15,43,0,0).getTime());

e.liberar("id-pyh2654", new Date(2022,9,13,16,43,0,0).getTime());

e.gerarRelatorio();