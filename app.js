function moverPosicionRandom(elm){
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * (window.innerHeight - elm.offsetHeight)) + "px";
    elm.style.left = Math.floor(Math.random() * (window.innerWidth - elm.offsetWidth)) + "px";

}

let btnSi = document.getElementById("botonSi");
let btnNo = document.getElementById("botonNo");
let divModoSexy = document.getElementsByClassName("modo_sexy")[0];

btnNo.addEventListener('mouseenter', function(e){moverPosicionRandom(e.target)})

btnSi.addEventListener('click', function(e){
    alert("Te amo, sabia que dirias que Si, juntos por siempre bebe 💖");
    divModoSexy.style.display = 'block';
    const audio = new Audio('./img/img_modo_hot.mp3');
    audio.play();
});