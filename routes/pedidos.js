const express = require('express');
const router = express.Router();

// RETORNA TODOS OS PEDIDOS

router.get('/', (req,res,next) =>{
    res.status(200).send({
        menssagem: 'Retonar o pedido'
    });
});

// INSERE OS PEDIDOS

router.post('/', (req,res,next)=>{
    res.status(201).send({
        menssagen: 'O pedido foi criado'
    })
})
// RETORNA OS DADOS DE UM PEDIDOS

router.get('/id_pedidos', (req,res,next) =>{
    const id = re.params.id_produto;
   
    res.status(200).send ({
        menssagen: 'detalhes do pedido',
        id_pedido:id
       
    });
   
})


// DELETA UM PRODUTO
router.delete('/', (req,res,next) => {
    res.status(2001).send({
        menssagem:"Pedido excluido"
    });
});