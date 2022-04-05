const express = require('express');
const router = express.Router();

// RETORNA TODOS OS PRODUTOS

router.get('/', (req,res,next) =>{
    res.status(200).send({
        menssagem: 'Usando o Get dentro da rota de produtos'
    });
});

// INSERE OS PRODUTOS

router.post('/', (req,res,next)=>{
    res.status(201).send({
        menssagen: 'Usando o Post dentro da rota de produtos'
    })
})
// RETORNA OS DADOS DE UM PRODUTO

router.get('/id_produto', (req,res,next) =>{
    const id = re.params.id_produto;

    if(id === 'especial'){
        res.status(200).send ({
            menssagen: 'você descobriu o ID especial',
            id:id
        });
    }else{
        res.status(200).send({
            menssagem: 'Você passou um ID'
        });
    };
   
})

// AlTERA UM PRODUTO
router.patch('/',(req,res,next) =>{
    res.status(201).send({
        menssagem:"Você está usando o Pathch"
    });
});


// DELETA UM PRODUTO
router.delete('/', (req,res,next) => {
    res.status(2001).send({
        menssagem:"você está usando o Delete"
    });
});



modulo.exports = router;