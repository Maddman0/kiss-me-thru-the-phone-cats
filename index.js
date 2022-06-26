var audio = new Audio('./audio/kiss_me_thru_the_phone_nightcore.mp3');
let playButton = document.getElementById("play");
let i = 0;
let startTime = 0;
let jumpTime = 0;
audio.currentTime = jumpTime;

let img = new Image();
document.body.appendChild(img);
document.body.appendChild



playButton.addEventListener("click", () => {
    audio.play();
    startTime = performance.now();
    playButton.remove();
    init();
});

let transition_times = [4, 11, 13, 14.5, 15.5, 16.8, 18.2, 19.5, 22.8];


function init () {
    requestAnimationFrame(tick);
}

function tick() {
    backgroundSpectra(i);
    i++;
    transition_times.forEach((transition,index) => {
        if (getElapsedTime() > (transition - jumpTime * 1.0)) 
        {
            display_image(index+1);
        } 
        if (getElapsedTime() > 33 - jumpTime) {
            document.body.innerHTML = ''
            document.write("this is all so far")
            audio.pause()
            cancelAnimationFrame();
        }
    });
    requestAnimationFrame(tick);
}

function display_image(index) {
    path = './images/' + index + '.jpg';
    img.src = path;
}

function clear_body() {
    document.body.innerHTML = '';
}

function getElapsedTime() {
    return (performance.now() - startTime)/1000.0;
}


let r = 234, g = 211, b = 206;
let r_up, g_up, b_up = true;
let rgb_limit = 230;
let rgb_lower_lim = 100;
let spectraSpeed = 2;
function backgroundSpectra(i) {
    if (r > rgb_limit) {
        r_up = false;
    } else if (r < rgb_lower_lim) {
        r_up = true;
    }
    if (g > rgb_limit) {
        g_up = false;
    } else if (g < rgb_lower_lim) {
        g_up = true;
    }
    if (b > rgb_limit) {
        b_up = false;
    } else if (b < rgb_lower_lim) {
        b_up = true;
    }
    console.log(`rgb(${r}, ${g}, ${b})`);
    r = r_up ? r + 1 * spectraSpeed * 2 : r - spectraSpeed * 2;
    g = g_up ? g + 1 * spectraSpeed * 2.5 : g - 1 * spectraSpeed * 2.5;
    b = b_up ? b + 1 * spectraSpeed * 1.5 : b - 1 * spectraSpeed * 1.5;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}



