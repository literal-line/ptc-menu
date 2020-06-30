// very bad JavaScript by Literal Line


var ptc = document.getElementById('ptc');
var title = document.getElementById('title');
var allBtn = document.getElementsByClassName('btn');
var clickToBegin = document.getElementById('ctb');

var bgm = new Audio('assets/audio/26 Pure Water.mp3');
var beep9 = new Audio('assets/audio/BEEP9.mp3');

var count = 0;
var x = 0;
var y = 0;

ptc.style.display = 'none';

function startPTC() {

    // set variables
    ptc.style.display = 'block';
    clickToBegin.style.display = 'none';
    
    // play background music
    bgm.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    bgm.play();

    // start title effect
    titleFloat();

    // start EventListeners
    setupEventListers();
}

function titleFloat() {
    count++;
    x = Math.cos(count/75);
    y = Math.cos(count/50) * 3 + 3;
    title.style.top = 3 + y + 'px';
    title.style.left = 2 + x + 'px';
    setTimeout(titleFloat, 10);
}

function setupEventListers() {
    for (var i = 0; i < allBtn.length; i++) {
        allBtn[i].addEventListener('mousedown', function (event) {
            
            this.src = 'assets/btn/' + this.id + '-push.png';
            
        });
        allBtn[i].addEventListener('mouseup', function (event) {
            
            this.src = 'assets/btn/' + this.id +'.png';
            beep9.play();
    
        });
    }
}
