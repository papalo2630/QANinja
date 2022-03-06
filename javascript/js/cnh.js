function verificarIdade() {
    var nome = document.querySelector('input[name=nome]')
    var idade = document.querySelector('input[name=idade]') // <input type="number" name="idade" placeholder="sua idade" />

    if (idade.value.length == 0) {
        alert('preencha o campo idade')
        return
    }

    var idadeNum = parseInt(idade.value)

    if (idadeNum >= 18) {
        alert('Ok, você pode tirar sua CNH')
    }
    else if (idadeNum > 4) {
        alert('Você é menor de idade')
    } else {
        alert('melhor andar de velotró')
    }
}