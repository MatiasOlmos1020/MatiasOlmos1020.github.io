const fechaObjetivo = new Date("2025-04-19T16:00:00");
const fechaObjetivoDisplay = document.getElementById("fechaObjetivoDisplay");
const mostrarFechaBtn = document.getElementById("mostrarFechaBtn");
let fechaMostrada = false;

function actualizarCuentaRegresiva() {
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo.getTime() - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    console.log("-----ahora-----")
    console.log(new Date());
    console.log("-----objetivo-----")
    console.log(fechaObjetivo);
    document.getElementById("countdown").innerText = `${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

actualizarCuentaRegresiva();
setInterval(actualizarCuentaRegresiva, 1000);

mostrarFechaBtn.addEventListener("click", function () {
    if (fechaMostrada) {
        fechaObjetivoDisplay.style.display = "none";
        fechaMostrada = false;
    } else {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
        fechaObjetivoDisplay.innerHTML = "Fecha Rol: " + fechaObjetivo.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }) + "<br>Horario: " + fechaObjetivo.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: true });
        fechaObjetivoDisplay.style.display = "block";
        fechaMostrada = true;
    }
});