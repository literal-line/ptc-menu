// very bad JavaScript by Literal Line
// (update 8/24/2020: I got better at JS so now the code is a bit cleaner)



var ptc = (function() {

    var ptc = document.getElementById('ptc');
    var title = document.getElementById('title');
    var allBtn = document.getElementsByClassName('btn');
    var clickToBegin = document.getElementById('ctb');
    
    var bgm = new Audio('assets/audio/26 Pure Water.mp3');
    var beep9 = new Audio('assets/audio/BEEP9.mp3');
    bgm.volume = 0.4;
    beep9.volume = 0.6;
    
    ptc.style.display = 'none';
    
    
    // event listeners
    for (var i = 0; i < allBtn.length; i++) {
        allBtn[i].addEventListener('mousedown', function (event) {
            this.src = 'assets/btn/' + this.id + '-push.png';
        });
    
        allBtn[i].addEventListener('mouseup', function (event) {
            this.src = 'assets/btn/' + this.id +'.png';
            beep9.pause();
            beep9.currentTime = 0;
            beep9.play();
        });
    }
    
    var start = function() {
    
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
        setInterval(titleFloat, 6);
    };
    
    var titleFloat = (function() {
        var count = 0;
        var x = 0;
        var y = 0;
    
        return function() {
            count++;
            x = Math.cos(count/75) * 2;
            y = Math.sin(count/60) * 3 + 3;
            title.style.top = 3 + Math.floor(y) + 'px';
            title.style.left = 2 + Math.floor(x) + 'px';
        }
    })();


    return {

        start: start

    }

})();
