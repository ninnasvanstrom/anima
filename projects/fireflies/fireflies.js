// SPARA DEN ANIMERADE FIREFLIENS KORDINATER OCH LÅT TRAILEN FÖLJA DEN SOM FIREFLIEN FÖLJER COORDINATES[] JSUT NU???



const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const firefly = document.querySelector('.firefly');

window.addEventListener('resize', function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;   
})

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;   



let drawing = false;
let fireflyHeightByTwo = 20/2

let startPositionX;
let startPositionY;

let trailComplete = false;

let coordinates = []; 
circles = []



function drawCircle(xAxis, yAxis){
    const circle = document.createElement('div');
    circle.classList.add('fly-trail');
    circle.style.height = '5px';
    circle.style.width = '5px';
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = 'rgb(255, 255, 252)';
    circle.style.position = 'absolute';
    circle.style.left = `${xAxis}px`;
    circle.style.top = `${yAxis}px`;
    circle.style.opacity = '0';
    circles.push(circle);
    document.body.appendChild(circle);
}


function drawTrail() {

    function startPosition(e) {
        e.preventDefault();
        startPositionX = e.clientX - 20;
        startPositionY = e.clientY - 20;

        drawing = true;
        window.addEventListener('mousemove', draw)
        draw(e);



        
    }

    function endPosition(e) {
        window.removeEventListener('mousemove', draw);
        e.stopPropagation();
        e.preventDefault();

        drawing = false;
        ctx.beginPath();

        setTimeout(function() {
            followTrail();
        }, 500)
    }

    function draw(e) {
        e.preventDefault();
        if(!drawing) {
            return
        }

        coordinates.push(e.clientX - 20);
        coordinates.push(e.clientY - 20);

        drawCircle(e.clientX - 20, e.clientY - 20)

        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        
        ctx.lineTo(e.clientX - 20, e.clientY - 20);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = "rgb(226, 226, 156)";
        ctx.moveTo(e.clientX - 20, e.clientY - 20);

    }

        window.addEventListener('mousedown', startPosition)
        window.addEventListener('mousemove', draw)
        window.addEventListener('mouseup', endPosition)

    

}


drawTrail();



function followTrail(){


    
    animationDuration = 25;

    const timeline = anime.timeline({
        easing: 'easeInCubic' 
    });

    timeline.add({
        targets: firefly,
        left: `${startPositionX}px`,
        top: `${startPositionY}px`,
        duration: 500,
    })



        for (let i = 0; i < coordinates.length; i+=2) {
            timeline.add({
                targets: firefly,
                easing: 'easeInExpo',
                left: `${coordinates[i]}px`,
                top: `${coordinates[i + 1]}px`,
                duration: animationDuration
            })
    
        } 

        // end for loop

        

        timeline.add({
            targets: firefly,
            easing: 'easeInCubic',
            left: `150%`,
            duration: 500,
        })
        .add({
            targets: firefly,
            opacity: 0,
            duration: 10,
            begin: function() {
                backgroundSound.pause();
                backgroundSound.currentTime = 0;
            }
        })
        .add({
            targets: firefly,
            left: `-100%`,
            duration: 10
        })
        .add({
            targets: firefly,
            opacity: 1,
            duration: 10,
        })


       
        

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        coordinates = [];

        
        setTimeout(function() {
            drawFireflyTrail();
        }, 500)



}




function drawFireflyTrail() {
    const timeline = anime.timeline({
        easing: 'easeInCubic' 
    });

    for (let i = 0; i < circles.length; i++) {
        timeline.add({
            targets: circles[i],
            easing: 'easeInCubic',
            opacity: 1,
            duration: 25
        })
        
    }

    for (let i = 0; i < circles.length; i++) {
        timeline.add({
            targets: circles[i],
            easing: 'easeInCubic',
            opacity: 0,
            duration: 30
        }, '-=18')   
        
    }

    
    const trails = document.querySelectorAll('.fly-trail');
    console.log(trails);
    setTimeout(function(){
        trails.forEach(function(trail) {
            trail.remove();
        })
    }, 5000)
    

    circles = [];


}



