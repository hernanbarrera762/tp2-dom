function calcularIMC(){
    const altura=parseFloat(document.getElementById('altura').value);
    const peso=parseFloat(document.getElementById('peso').value);
    if (!altura || altura<=0){
        alert('por favor, ingresa una estatura válida.')
    return;
    }
    if (!peso||peso<=0){
        alert('por favor, ingresa un peso válido.');
    return;
    }
    const imc=peso/(altura*altura);
    alert ('tu IMC es: '+imc.toFixed(2));
}
