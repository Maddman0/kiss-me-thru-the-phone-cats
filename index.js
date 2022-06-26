var audio = new Audio('/kiss_me_thru_the_phone_nightcore.mp3');
let playButton = document.getElementById("play");
let startTime = 0;
let img = new Image();
let jumpTime = 0;
document.body.appendChild(img);
document.body.appendChild


playButton.addEventListener("click", () => {
    audio.play();
    audio.currentTime = jumpTime;
    startTime = performance.now();
    playButton.remove();
    init();
});

let transition_times = [4, 11, 13, 14.5, 15.5, 16.8, 18.2, 19.5, 22.8];


function init () {
    requestAnimationFrame(tick);
}

function tick() {
    transition_times.forEach((transition,index) => {
        if (getElapsedTime() > (transition - jumpTime * 1.0)) 
        {
            console.log("transitioned");
            display_image(index+1);
        } 
    });
    requestAnimationFrame(tick);
}

function display_image(index) {
    path = '/images/' + index + '.jpg';
    img.src = path;
}

function clear_body() {
    document.body.innerHTML = '';
}

function getElapsedTime() {
    return (performance.now() - startTime)/1000.0;

}



