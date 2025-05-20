function calculararea(){
    const a=parseFloat(document.getElementById('a').value);
    const b=parseFloat(document.getElementById('b').value);
    const c=parseFloat(document.getElementById('c').value);
    if (a<=c){
        document.getElementById('resultado').textContent= "Error: A debe ser mayor que C paa poder calcularse."
        return;
    }
    const arearectangulo=b*c;
    const areatriangulo=(b*(a-c))/2;
    const areatotal= arearectangulo+areatriangulo;
    document.getElementById('resultado').textContent= `El área total del terreno es de: ${areatotal.toFixed(2)} metros cuadrados`;
}
