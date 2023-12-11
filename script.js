document.addEventListener('DOMContentLoaded', function () {
    const play = document.getElementById('iconodeplay');
    const pausa = document.getElementById('pausa');
    const avanzar = document.getElementById('iconoavanzar');
    const retroceder = document.getElementById('iconos');
    const audio = document.getElementById('audio1');
    const audio2 = document.getElementById('audio2');
    const imagen = document.getElementById('imagencover');
    const titulo = document.getElementById('title');
    const autor = document.getElementById('author');
    const minutostrascurridos = document.getElementById('inicio');
    const minutosquefaltan = document.getElementById('final');
    const barprogress = document.getElementById('barprogress');

    let currentAudio = audio;

    play.addEventListener('click', function () {
        play.classList.add('oculta');
        pausa.classList.remove('oculta');
        currentAudio.play();
    });

    pausa.addEventListener('click', function () {
        pausa.classList.add('oculta');
        play.classList.remove('oculta');
        currentAudio.pause();
    });

    function CambiarCancion() {
        if (currentAudio === audio) {
            currentAudio = audio2;
            titulo.textContent = 'Forest Lullaby';
            autor.textContent = 'Lesfm';
            imagen.src = 'cover-2.png';
        } else {
            currentAudio = audio;
            titulo.textContent = 'Lost in the City Lights';
            autor.textContent = 'Cosmo Sheldrake';
            imagen.src = 'cover-1.png';
        }
    }

    avanzar.addEventListener('click', function () {
        currentAudio.pause();
        CambiarCancion();
        play.classList.add('oculta');
        pausa.classList.remove('oculta');
        currentAudio.currentTime = 0;
        currentAudio.play();
        actualizarTiempo(currentAudio, minutostrascurridos, minutosquefaltan);
    });

    retroceder.addEventListener('click', function () {
        currentAudio.pause();
        CambiarCancion();
        play.classList.add('oculta');
        pausa.classList.remove('oculta');
        currentAudio.currentTime = 0;
        currentAudio.play();
        actualizarTiempo(currentAudio, minutostrascurridos, minutosquefaltan);
    });

    audio.addEventListener('timeupdate', function () {
        actualizarTiempo(audio, minutostrascurridos, minutosquefaltan);
        barprogresscolor(audio, barprogress);
    });

    audio2.addEventListener('timeupdate', function () {
        actualizarTiempo(audio2, minutostrascurridos, minutosquefaltan);
        barprogresscolor(audio2, barprogress);
    });

    barprogress.addEventListener('input', function () {
        const progreso = barprogress.value;
        const duration = currentAudio.duration;
        const currenttime = (progreso / 100) * duration;
        currentAudio.currentTime = currenttime;
        actualizarTiempo(currentAudio, minutostrascurridos, minutosquefaltan);
        barprogresscolor(currentAudio, barprogress);
    });

    function barprogresscolor(currentAudio, progressBar) {
        const progressporcentaje = (currentAudio.currentTime / currentAudio.duration) * 100;
        progressBar.style.background = `linear-gradient(to right, #C93B76 0%, #C93B76 ${progressporcentaje}%, #E5E7EB ${progressporcentaje}%, #E5E7EB 100%)`;
    }
    
    function actualizarTiempo(currentAudio, minutostrascurriendo, minutosfaltantes) {
        let minutitos = Math.floor(currentAudio.currentTime / 60);
        let segunditos = Math.floor(currentAudio.currentTime % 60);
        minutostrascurriendo.textContent = `${minutitos}:${segunditos < 10 ? '0' : ''}${segunditos}`;
    
        const minutosquefaltan = Math.floor((currentAudio.duration - currentAudio.currentTime) / 60);
        const segundosquefaltan = ((currentAudio.duration - currentAudio.currentTime) % 60).toFixed(0);
        const tiempoFormateadoFaltante = `${minutosquefaltan}:${segundosquefaltan < 10 ? '0' : ''}${segundosquefaltan}`;
        minutosfaltantes.textContent = tiempoFormateadoFaltante;
    }
    
});