var numeroSecreto = parseInt(Math.random() * 31)
console.log(numeroSecreto)
var input = document.querySelector("input")
var botao = document.querySelector("button")
var chances = 3
var res = window.document.getElementById('res')
function verificar(){
while (chances > 0) {
    if (numeroSecreto == input.value) {
      res.innerHTML = "Você ACERTOU!!!"
      console.log("chances acerto: " + chances)
      break
    } else {
      if (numeroSecreto < input.value) {
        res.innerHTML = "Você ERROU, o numero é menor!! Chances: " + chances
        console.log("Chances erro : " + chances)
        chances--
        break
      }
      if (numeroSecreto > input.value) {
        res.innerHTML = "Você ERROU, o numero é maior!! Chances: " + chances
        console.log("Chances: " + chances);
        chances--
        break
      }
    }
  
}
if (chances == 0) {
    res.innerHTML = "Você perdeu!!! Suas chances acabaram!!!, O numero secreto era: "  + numeroSecreto
   
  }
}
function limpaTela() {
  input.value = ""
}

input.onclick = limpaTela;
