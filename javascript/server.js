const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({message:'Hello Cypress discovery'})
})

app.get('/avengers',function(req, res){
    var avengers = ['Tony Stark', 'Clint Barton', 'Natasha Romanoff', 'Steve Rogers']
    return res.json({data: avengers})
})
app.get('/cnh',function(req, res){
    const idade =req.query.idade
    
    if (!idade.length == 0) {
        return res.json({message:'preencha o campo idade'})        
    }

    var idadeNum = parseInt(idade)

    if (idadeNum >= 18) {
        return res.json({message:'Ok, você pode tirar sua CNH'})
    }
    else if (idadeNum > 4) {
        return res.json({message:'Você é menor de idade'})
    } else {
        return res.json({message:'melhor andar de velotró'})
    }
    //return res.json({test: idade})
})
app.listen(3000)