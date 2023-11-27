// Função para verificar se um número é par e adicionar ao array
function verificarPar(numero, array) {
    if (numero % 2 === 0) {
      array.push(numero)
      return true
    }
    return false
}
  
// Array para armazenar números pares
let numerosPares = []

// Função para calcular a soma dos números pares no array
function calcularSomaPares(array) {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        soma += array[i]
    }
    return soma
}
  
  // Event listener para aguardar o clique em um botão
document.getElementById('btnVerificar').addEventListener('click', function() {
    let userInput = parseInt(document.getElementById('numeroInput').value)

    if (!isNaN(userInput)) {
        if (verificarPar(userInput, numerosPares)) {
        console.log(`Número ${userInput} adicionado aos pares.`)
        } else {
        console.log(`Número ${userInput} é ímpar.`)
        }
        console.log(`Números pares: ${numerosPares}`)
        console.log(`Soma dos números pares: ${calcularSomaPares(numerosPares)}`)
    } else {
        console.error('Por favor, insira um número válido.')
    }

})
