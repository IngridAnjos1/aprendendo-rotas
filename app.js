const express = require('express')
const app = express();
const rotaProdutos = require('./routes/produtos');
const rotaPedidos =  require ('./routes/pedidos');

app.use('/produtos' , rotaProdutos);
app.use('./produtos' , rotaPedidos);

// QUANDO NÂO ENCONTRA A ROTA
app.use((req,res,next) =>{
    const erro = newError('não encontrato');
    erro.status(404);
});

app.user( (error,req,res,next) =>{
    res.status(error.status || 500);
    return res.send ({
        erro: {
            menssagem: error.menssagem
        }
    })
})

app.listen(3000, ()=>{
    console.log('Express started at http://localhost:2233')
})


module.exports=app;