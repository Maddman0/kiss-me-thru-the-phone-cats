var audio = new Audio('/kiss_me_thru_the_phone_nightcore.mp3');
window.onload = () => {audio.play()};
    

function display_image(index) {
    path = '/audio/' + index + '.jpg';
    let img = new Image();
    img.src = 'audio/1.jpg';
    document.body.appendChild(img);
}

display_image(2);



