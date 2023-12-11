
document.addEventListener('DOMContentLoaded', function () {
    const play = document.getElementById('iconodeplay');
    const pausa= document.getElementById('pausa');
    const avanzar = document.getElementById('iconos2');
    const retroceder = document.getElementById('iconos');
   const audio = document.getElementById('audio2');

    play.addEventListener('click', function(){
        play.classList.add('oculta');
pausa.classList.remove('oculta');
audio.play();
    })
    
pausa.addEventListener('click', function(){
    pausa.classList.add('oculta');
    play.classList.remove('oculta');
audio.pause();
})

avanzar.addEventListener('click', function(){
    window.location.href = 'song2.html';

 })

 retroceder.addEventListener('click', function(){
    window.location.href = 'song2.html';

})


});