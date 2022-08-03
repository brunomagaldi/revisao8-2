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
const conexao = ()=>{
    mongoose.connect('mongodb+srv://userRevisao:magaldi321@fiaptecnico.5fetl.mongodb.net/revisao')
}
//achar o modelo para a coleção alunos
const modelo = new mongoose.Schema({
    nome:String,
    turma:String,
    disciplina:String
})
//definir o modelo para a coleção alunos
const alunos = mongoose.model('alunos',modelo)
/* configuração do banco de dados - fim */
/* rota para requisição /*/
app.get('/',async(req,res)=>{
    conexao()
    //pesnquisar os documentos na collection alunos
    const resultado = await alunos.find()
    console.log(resultado)
    //res.send('Funcionando')
    res.render('index.ejs',{resultado})
})
