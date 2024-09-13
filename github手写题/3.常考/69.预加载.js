const div = document.querySelector('#app');
const img = new Image();
img.src = 'https://ieeep.cn/img/logo.png';
img.onload = function(){
    div.appendChild(img);
}