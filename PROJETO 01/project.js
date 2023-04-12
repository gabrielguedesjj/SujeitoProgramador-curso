var peso
var altura
var imc 
var resultado

function calcular(event) {
    event.preventDefault()

    peso = document.getElementById('peso').value
    altura = document.getElementById('altura').value

   imc = peso / (altura * altura)

   if(imc < 17){
    resultado = document.getElementById('resultado');
    resultado.innerHTML = '<br/> Seu resultado foi ' + imc.toFixed(2) + '<br/> Cuidade vc esta muito abaixo do peso !'
   }else if(imc >17 && imc < 18.79) {
    resultado = document.getElementById('resultado');
    resultado.innerHTML = '<br/> Seu resultado foi ' + imc.toFixed(2) + '<br/>  vc esta abaixo do peso  !'
   }else if(imc > 18.5 && imc <24.99){
    resultado = document.getElementById('resultado');
    resultado.innerHTML = '<br/> Seu resultado foi ' + imc.toFixed(2) + '<br/>  vc esta no peso ideal!'
   }else if(imc > 25 && imc <= 29.99){
    resultado = document.getElementById('resultado');
    resultado.innerHTML = '<br/> Seu resultado foi ' + imc.toFixed(2) + '<br/> Cuidade vc esta acima do peso !'
   }else if(imc >=30){
    resultado = document.getElementById('resultado');
    resultado.innerHTML = '<br/> Seu resultado foi ' + imc.toFixed(2) + '<br/> Cuidade vc esta muito acima do peso !'
   }

    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''

}