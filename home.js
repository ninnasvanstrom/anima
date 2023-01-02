function changeCircleColor() {

    const timeline = anime.timeline({
        loop: true,
        duration: 3000, 
        easing: 'easeInOutSine',
    });
    
    timeline.add({
        targets: 'path',
        fill: '#E7DFFF'
    }, '-=1500')
    .add({
        targets: 'path',
        fill: '#A7FFB0'
    })
    .add({
        targets: 'path',
        fill: '#F3EEC2',
    })
    .add({
        targets: 'path',
        fill: '#E7DFFF',
    })

}


function rotateCircle() {

    const timeline = anime.timeline({
        loop: true,
        duration: 1500, 
        easing: 'easeInOutSine',
    });
    
    timeline.add({
        targets: 'h1',
        rotate: 180,
    })

}

const d = new Date();
let year = d.getFullYear();

const yearDisplay = document.getElementById('year').innerHTML = year;

rotateCircle();
changeCircleColor();
