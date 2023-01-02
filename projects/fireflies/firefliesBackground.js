
function createBackgroundFirefly(size, xAxis, yAxis, id) {
    const firefly = document.createElement('div');
    firefly.classList.add('backgroundFirefly');
    firefly.setAttribute('id', id)
    firefly.style.height = `${size}px`;
    firefly.style.width = `${size}px`;
    firefly.style.borderRadius = '50%';
    firefly.style.position = 'absolute';
    firefly.style.left = `${xAxis}px`;
    firefly.style.top = `${yAxis}px`;
    // firefly.style.opacity = '0';
    firefly.style.backgroundColor = 'rgb(255, 255, 255)';
    firefly.style.boxShadow = '0 0 20px 3px #fff, 0 0 50px 5px rgb(255, 245, 136), 0 0 90px 7px rgb(253, 255, 226)';
    document.body.appendChild(firefly);

}



let animateBackgroundFirefliesTimer = true;




function animateBackgroundFireflies() {
    

    let randomSize = Math.ceil(Math.random() * 7) + 1;
    let randomXAxisStart = Math.ceil(Math.random() * window.innerWidth)
    let randomYAxisStart = Math.ceil(Math.random() * window.innerHeight)
    let randomId = Math.floor(Math.random() * 100);

    createBackgroundFirefly(randomSize, randomXAxisStart, randomYAxisStart, randomId);

    const firefly = document.getElementById(randomId);
    
    randomizeAnimation(firefly, randomXAxisStart, randomYAxisStart);

}




function randomizeAnimation(element, xAxisStart, yAxisStart) {
    let randomYAxis1 = Math.ceil(Math.random() * window.innerHeight) 
    let randomXAxis1 =  Math.ceil(Math.random() * window.innerWidth) 

    let randomYAxis2 = Math.ceil(Math.random() * window.innerHeight) 
    let randomXAxis2 =  Math.ceil(Math.random() * window.innerWidth) 

    let randomYAxis3 = Math.ceil(Math.random() * window.innerHeight) 
    let randomXAxis3 =  Math.ceil(Math.random() * window.innerWidth)

    let randomYAxis4 = Math.ceil(Math.random() * window.innerHeight) 
    let randomXAxis4 =  Math.ceil(Math.random() * window.innerWidth)

    let randomSpeed = Math.ceil((Math.random() * 8) * 110000);
    
    let randomEndPositionX = Math.round(Math.random()* 1)
    let randomEndPositionY = Math.round(Math.random()* 1);

    let endPositionX;
    let endPositionY;

    if(randomEndPositionX == 0) {
        endPositionX = 1000
    } else {
        endPositionX = -1000
    }

    if(randomEndPositionY == 0) {
        endPositionY = window.innerHeight + 1000
    } else {
        endPositionY = -1000
    }

    const timeline = anime.timeline({
        duration: randomSpeed,
        loop: true,
        easing: 'easeOutCubic',
    });
    timeline.add({
        targets: element,
        top: `${randomYAxis1}px`,
        left: `${randomXAxis1}px`,
        // duration: randomSpeed
    })
    .add({
        targets: element,
        top: `${randomYAxis2}px`,
        left: `${randomXAxis2}px`,
        // duration: randomSpeed
    })
    .add({
        targets: element,
        top: `${randomYAxis3}px`,
        left: `${randomXAxis3}px`,
        // duration: randomSpeed
    })
    .add({
        targets: element,
        top: `${randomYAxis4}px`,
        left: `${randomXAxis4}px`,
        // duration: randomSpeed
    })
    .add({
        targets: element,
        top: `${xAxisStart}px`,
        left: `${yAxisStart}px`,
        // duration: randomSpeed
    })

}

for (let i = 0; i < 26; i++) {
    animateBackgroundFireflies();
}

