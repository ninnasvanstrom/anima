// **** VARIABLES **** //

// DOM Content
const grid = document.querySelector('.grid');
const controls = document.querySelectorAll('.control');
const blowBubblesBtn = document.querySelector('.blow-bubbles');
const popBubblesBtn = document.querySelector('.pop-bubbles');
const playBubblesBtn = document.querySelector('.play-bubbles');
const audioCreateBubble = document.querySelector('.create-bubble-sound');
const audioPopBubble = document.querySelector('.bubble-pop-sound');






// **** EVENT LISTENERS **** //

// HOVER CONTROLS
controls.forEach(function(control){
    control.addEventListener('mouseover', function(){
        control.style.fontWeight = '500';
    })

    control.addEventListener('mouseout', function(){
        control.style.fontWeight = '300';
    })
})

// CLICK CONTROLOS
// BUBBLES: 
let blow = false;
let play = false;
let pop = false;

blowBubblesBtn.addEventListener('click', function(e) {
    blowBubblesBtn.classList.toggle('active');
    popBubblesBtn.classList.remove('active');
    playBubblesBtn.classList.remove('active');

    blow = true;
    play = false;
    pop = false;
    
    if(blow) {
        console.log('blow');
        grid.addEventListener('mousedown', createBubbles);
        grid.addEventListener('mouseup', stopCreateBubbles);

    } else {
        console.log('not blow');
        return
    }
    

})

playBubblesBtn.addEventListener('click', function(e) {
    playBubblesBtn.classList.toggle('active');
    popBubblesBtn.classList.remove('active');
    blowBubblesBtn.classList.remove('active');

    play = true;
    pop = false;
    blow = false;
    
    if(play) {
        console.log('play');

        grid.removeEventListener('mousedown', createBubbles);
        grid.removeEventListener('mouseup', stopCreateBubbles);

        // select all circles
        const bubbles = document.querySelectorAll('.circle')

        bubbles.forEach(function(bubble) {
            bubble.style.cursor = 'grab';
            let bubbleHeight = bubble.getBoundingClientRect().height;
            let bubbleLeft = bubble.getBoundingClientRect().left;
            let bubbleTop = bubble.getBoundingClientRect().top;
            
            bubble.addEventListener('mouseover', function(e) {
            inflateBubbles(bubble, bubbleHeight, bubbleLeft, bubbleTop);
            })
            bubble.addEventListener('mouseout', function(e) {
                deflateBubbles(bubble);
            })
        });
    } else {
        console.log('not play');
        return
    }



})

popBubblesBtn.addEventListener('click', function(e) {
    popBubblesBtn.classList.toggle('active');
    blowBubblesBtn.classList.remove('active');
    playBubblesBtn.classList.remove('active');

    pop = true;
    play = false;
    blow = false;
    
    if(pop) {
        console.log('pop');
        popBubbles();
        grid.removeEventListener('mousedown', createBubbles);
        grid.removeEventListener('mouseup', stopCreateBubbles);
    } else {
        console.log('not pop');
        return
    }
})


// timerId's for setInterval functions
let createBubbleTimer = null;
let dropBubblesTimer = null;

// timer for size of circle: 
let seconds = 0;
let interval = null;

// **** FUNCTIONS **** //

// TIMER: 
function timer (){
    seconds ++;

    //format our time:
    let hrs = Math.floor(seconds / 3600);
    //mins are seconds divided by 60
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    //when seconds variable = 60, then secs variable = 1, etc
    let secs = seconds % 60;

}

function startTimer() {

    //if interval is running, then do nothing
    if (interval) {
        return
    } else {
        //setInterval runs the timer function every second
        interval = setInterval(timer, 1);
    }


}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer () {
    stopTimer();
    seconds = 0;
}


// BUBBLES:
// blow one circle
function blowCircle(xAxis, yAxis, color) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.left = xAxis + 'px';
    circle.style.top = yAxis + 'px';
    circle.style.backgroundColor = color;
    grid.appendChild(circle);
}

// get random color function:
function getRandomHex() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * hex.length);
        hexColor += hex[randomNum];
    }

    // add opacity:
    hexColor += '99';
    return hexColor;

}

// create bubbles on window
function createBubbles(e) {
    // play audio:
    audioCreateBubble.volume = 0.5;
    audioCreateBubble.currentTime = 0;
    audioCreateBubble.play();

    startTimer();
    // blow circle where mouse is and assign random color:
    blowCircle(e.clientX, e.clientY, getRandomHex());

    // target the current circle
    let circles = document.querySelectorAll('.circle') 
    circles.forEach(function(circle) {
        if(circle.style.left == `${e.clientX}px` && circle.style.top == `${e.clientY}px`) {
            // make it larger while mouse is held
            createBubbleTimer = setInterval(function(){
                circle.style.height = seconds + 'px';
                circle.style.width = seconds + 'px';
                circle.style.left = e.clientX - (seconds/2) + 'px';
                circle.style.top = e.clientY - (seconds/2) + 'px';
            },1)
        }
    })

}

function stopCreateBubbles(){
    resetTimer();
    clearInterval(createBubbleTimer);
}

// pop bubbles
function popBubbles() {
  
   
        console.log('pop: ' + pop);
        console.log('play: ' + play);
        console.log('blow: ' + blow);
         // pop bubbles:
         const bubbles = document.querySelectorAll('.circle');
         bubbles.forEach(function(bubble) {
         bubble.style.cursor = 'pointer';
         bubble.addEventListener('click', function(e){
             if(pop) {
             bubble.remove();
             audioPopBubble.currentTime = 0;
             audioPopBubble.play();
            } else {return}
         })
     })

}

// inflate bubbles with cursor
function inflateBubbles(bubble, bubbleHeight, bubbleLeft, bubbleTop) {

    if(play) {
        console.log('pop: ' + pop);
        console.log('play: ' + play);
        console.log('blow: ' + blow);

        const timeline = anime.timeline({
            easing: 'easeOutCubic' 
        });
    
        timeline.add({
            targets: bubble,
            width: `${bubbleHeight * 2}px`,
            height: `${bubbleHeight * 2}px`,
            left: `${(bubbleLeft) - (bubbleHeight/2)}px`,
            top: `${(bubbleTop) - (bubbleHeight/2)}px`,
            duration: 1000
        })
    
    
    
        function randomPlayBubbleSound() {
            const audioPlayBubbles = Array.from(document.querySelectorAll('.play-bubbles-sound'));
            const randomNum = Math.floor(Math.random() * audioPlayBubbles.length)
            audioPlayBubbles[randomNum].play();
    
        }
    
        randomPlayBubbleSound();
    } else {
        return
    }
        


        
}

// stop inflation of bubbles 
function deflateBubbles(bubble) {

    if(play) {
        console.log('pop: ' + pop);
        console.log('play: ' + play);
        console.log('blow: ' + blow);

        let bubbleHeight = bubble.getBoundingClientRect().height / 2;
            let bubbleLeft = bubble.getBoundingClientRect().left;
            let bubbleTop = bubble.getBoundingClientRect().top;
    
            const timeline = anime.timeline({
                easing: 'easeOutCubic' 
            });
    
            // bubbles stay on the same position:
            timeline.add({
                targets: bubble,
                width: `${bubbleHeight}px`,
                height: `${bubbleHeight}px`,
                left: `${bubbleLeft + (bubbleHeight/2)}px`,
                top: `${bubbleTop + (bubbleHeight/2)}px`,
                duration: 1000
            })
    } else {
        return
    }
        

}

