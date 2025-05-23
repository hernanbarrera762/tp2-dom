document.addEventListener("DOMContentLoaded", () => {
document.getElementById("sumar").addEventListener("click", () => {
    const n1 = parseFloat(document.getElementById("numerouno").value);
    const n2 = parseFloat(document.getElementById("numerodos").value);

    if (isNaN(n1) || isNaN(n2)) {
    document.getElementById("resultado").textContent = "Por favor ingresa dos números válidos.";
    } else {
    const suma = n1 + n2;
    document.getElementById("resultado").textContent = "Resultado: " + suma;
    }
    });
});
