const imoveis = require('./dados');

const get = (req , res) => {
    return res.json(imoveis);
}

const getPorId = (req, res) => {

    const { id } = req.params;

    const imovel = imoveis.find((item) => {
        return item.id === Number(id);
    });

    console.log(imovel);

    return res.json(imovel);
}

module.exports = {
    get,
    getPorId
}