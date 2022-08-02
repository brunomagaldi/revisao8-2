/* configurações do servidor - início */
//carregar o modulo express
const express = require('express')
//executar o módulo express
const app = express()
//definir a pasta dos arquivos ejs
app.set('views','./')
//criar uma instancia local
app.listen(3050,()=>{
    console.log("servidor local em http://localhost:3050")
})
/* configurações do servidor - fim */

/* configuração do banco de dados - início */
//impportar o modulo mongoose
const mongoose = require('mongoose')
//configurar p script de conexão
const conexão = ()=>{
    mongoose.connect('mongodb+srv://<userRevisao>:magaldi321@fiaptecnico.5fetl.mongodb.net/test')
}

/* configuração do banco de dados - fim */
/* rota para requisição /*/
app.get('/',(req,res)=>{
    //res.send('Funcionando')
    res.render('index.ejs',{nome:"Bruno Lindo", turma:"2EMIA", disciplina:"LP2"})
})
