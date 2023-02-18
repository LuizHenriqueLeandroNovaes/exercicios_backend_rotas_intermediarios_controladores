const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let jogador_agora = 0 ;


const jogador_vez = (req , res) => {

    const Semjogador = jogadores[jogador_agora];

    jogador_agora++;

    if(jogador_agora >= jogadores.length){
        jogador_agora = 0 ;
    }

    return res.send(`É a vez do ${Semjogador} jogar !`);
}

const consultar = (req, res) => {
    return res.send(jogadores);
}

const remover = (req, res) => {
    
    const indice = Number(req.query.indice);

    if(indice >= jogadores.lenght){
        return res.send(`Não existe jogador no indice informado ${indice} para ser removido.`);
    }

    jogadores.splice(indice, 1);

    return res.send(jogadores);
}

const adicionar = (req, res) => {
    let nomejogador = req.query.nome;
    const indice = Number(req.query.indice);

    nomejogador = `${nomejogador[0].toUpper()}${nomejogador.slice(1).toUpper()}`;

    if(isNaN(indice)){
        jogadores.push(nomejogador);
        return res.send(jogadores);
    }

    if(indice >= jogadores.length){
        return res.send(`O indice informado ${indice} naõ exite no Array`)
    }

    jogadores.splice(indice, 1);
}

module.exports = {
    jogador_vez,
    consultar,
    remover,
    adicionar
}
