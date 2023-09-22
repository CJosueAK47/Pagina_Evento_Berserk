AOS.init();

const dataEvento = new Date("Oct 6, 2023 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contaPassagemDoTempo = setInterval(function(){
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    const ateEvento = timeStampEvento - timeStampAgora;

    const diaAteEvento = Math.floor(ateEvento / (1000 * 60 * 60 * 24));
    const horasAteEvento = Math.floor((ateEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosAteEvento = Math.floor((ateEvento % (1000 * 60 * 60)) / (1000 * 60));
    const segundosAteEvento = Math.floor((ateEvento % (1000 * 60)) / 1000);

    document.getElementById('contador').innerHTML = `${diaAteEvento}d ${horasAteEvento}h ${minutosAteEvento}min ${segundosAteEvento}s`;

    if(ateEvento <= 0){
        clearInterval(contaPassagemDoTempo);
        document.getElementById('contador').innerHTML = 'Evento Expirado!';
    }
}, 1000);
 