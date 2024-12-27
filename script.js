// Adicionando imagens ao carrossel
const carrosel = document.querySelector(".carousel-inner");

function adicionarImg() {
    for (let i = 2; i < 19; i++) {
        const div = document.createElement("div");
        div.className = "carousel-item";

        const img = document.createElement("img");
        img.src = `./img/imgEu-Belle (${i + 1}).jpeg`;
        img.alt = `Foto ${i + 1} de Caio e Isabelle`;
        div.appendChild(img);

        carrosel.appendChild(div);
    }
}

adicionarImg();

// Contador de tempo juntos
const pedidoNamoro = new Date(2023, 3, 5, 15, 0, 0);

function contador() {
    const dataAtual = new Date();
    const diferenca = dataAtual - pedidoNamoro;

    let anos = dataAtual.getFullYear() - pedidoNamoro.getFullYear();
    let meses = dataAtual.getMonth() - pedidoNamoro.getMonth();
    let dias = dataAtual.getDate() - pedidoNamoro.getDate();

    if (dias < 0) {
        meses -= 1;
        const ultimoDiaDoMesAnterior = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate();
        dias += ultimoDiaDoMesAnterior;
    }

    if (meses < 0) {
        meses += 12;
        anos -= 1;
    }

    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("anos-valor").textContent = anos;
    document.getElementById("meses-valor").textContent = meses;
    document.getElementById("dias-valor").textContent = dias;
    document.getElementById("horas-valor").textContent = horas;
    document.getElementById("minutos-valor").textContent = minutos;
    document.getElementById("segundos-valor").textContent = segundos;
}

setInterval(contador, 1000);
