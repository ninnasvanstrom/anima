// MAKE GENERATE COLOR FUNCTION GLOBAL


const canvas = document.querySelector('.canvas')
const squaresBtn = document.querySelector('.squares')
const circlesBtn = document.querySelector('.circles')
const linesBtn = document.querySelector('.lines')

let enableSquares = false;
let enableCircles = false;
let enableLines = false;

function drawSquare(xAxis, yAxis, size, randomColor) {
    const square = document.createElement('div');
    square.style.border = `2px solid ${randomColor}`;
    square.style.borderRadius = `10%`;
    square.style.position = 'absolute';
    square.style.left = `${xAxis}px`;
    square.style.top = `${yAxis}px`;
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    square.classList.add('rotateSquare');

    const squareWrapper = document.createElement('div');
    squareWrapper.classList.add('square-wrapper');
    squareWrapper.appendChild(square);
    document.body.appendChild(squareWrapper);

    setTimeout(function() {
        squareWrapper.classList.add('fadeItemTwo');
    }, 300)

    setTimeout(function() {
        document.body.removeChild(squareWrapper);
    }, 1300)


}

function drawCircle(xAxis, yAxis, size, randomColor) {
    const circle = document.createElement('div');
    circle.style.backgroundColor = randomColor;
    circle.style.borderRadius = `50%`;
    circle.style.position = 'absolute';
    circle.style.left = `${xAxis}px`;
    circle.style.top = `${yAxis}px`;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.classList.add('wobbleCircle');
    document.body.appendChild(circle);

    setTimeout(function() {
        circle.classList.add('fadeItem');
    }, 500)

    setTimeout(function() {
        document.body.removeChild(circle);
    }, 1500)
}

function drawLine(xAxis, yAxis, width, height, randomColor) {
    let randomRotation = Math.ceil(Math.random() * 4);

    const line = document.createElement('div');
    line.style.backgroundColor = randomColor;
    line.style.borderRadius = `10%`;
    line.style.position = 'absolute';
    line.style.left = `${xAxis}px`;
    line.style.top = `${yAxis}px`;
    line.style.width = `${width}px`;
    line.style.height = `${height}px`;
 
    
    const lineWrapper = document.createElement('div');
    lineWrapper.classList.add('line-wrapper');
    lineWrapper.appendChild(line);
    document.body.appendChild(lineWrapper);
    

    if(randomRotation == 1) {
        line.style.transform = 'rotate(-45deg)';

    } else if (randomRotation == 2) {
        line.style.transform = 'rotate(-90deg)';

    } else if (randomRotation == 3) {
        line.style.transform = 'rotate(-135deg)';

    } else if (randomRotation == 4) {
        line.style.transform = 'rotate(-180deg)';


    }

 
    setTimeout(function() {
        lineWrapper.classList.add('fadeItemTwo');
    }, 300)

    setTimeout(function() {
        document.body.removeChild(lineWrapper);
    }, 1300)
}


squaresBtn.addEventListener('click', function(){

    squaresBtn.classList.toggle('active');

    if(squaresBtn.classList.contains('active')) {
        enableSquares = true;
    } else {
        enableSquares = false;
    }

   
        canvas.addEventListener('mousemove', function(e) {
            let randomX;
            let randomY;
            let randomSize;
            let randomColor;
        
            function genRandomX() {
                const randomOperator = Math.floor(Math.random() * 2);
                const randomNum = Math.floor(Math.random() * 70);
        
                if(randomOperator == 0) {
                    randomX = e.clientX - randomNum;
                } else {
                    randomX = e.clientX + randomNum;
                }
            }
        
            function genRandomY() {
                const randomOperator = Math.floor(Math.random() * 2);
                const randomNum = Math.floor(Math.random() * 70);
        
                if(randomOperator == 0) {
                    randomY = e.clientY - randomNum;
                } else {
                    randomY = e.clientY + randomNum;
                }
            }
        
            function genRandomSize() {
                const randomNum = Math.ceil(Math.random() * 5);
        
                if(randomNum == 0) {
                    randomSize = randomNum * 10;
                } else if (randomNum == 1) {
                    randomSize = randomNum * 10;
                } else if (randomNum == 2) {
                    randomSize = randomNum * 10;
                } else if (randomNum == 3) {
                    randomSize = randomNum * 10;
                } else if (randomNum == 4) {
                    randomSize = randomNum * 10;
                } else if (randomNum == 5) {
                    randomSize = randomNum * 10;
                }
        
            }
        
            function genRandomColor() {
                const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
                let hexColor = '#';
        
                for (let i = 0; i < 6; i++) {
                    let randomNum = Math.floor(Math.random() * hex.length);
                    hexColor += hex[randomNum];
                }
        
                // add opacity:
                hexColor += '99';
        
                randomColor = hexColor;
        
            }
        
            genRandomX();
            genRandomY();
            genRandomSize();
            genRandomColor();
            
            if(enableSquares) {
                // left, top, width, height
                drawSquare(randomX, randomY, randomSize, randomColor);
                drawSquare(randomX, randomY, randomSize, randomColor);
                drawSquare(randomX, randomY, randomSize, randomColor);
            }

        })




})

circlesBtn.addEventListener('click', function(){

    circlesBtn.classList.toggle('active');

    if(circlesBtn.classList.contains('active')) {
        enableCircles = true;
    } else {
        enableCircles = false;
    }

    
        canvas.addEventListener('mousemove', function(e) {
            let randomX;
            let randomY;
            let randomSize;
            let randomColor;
        
            function genRandomX() {
                const randomOperator = Math.floor(Math.random() * 2);
                const randomNum = Math.floor(Math.random() * 50);
        
                if(randomOperator == 0) {
                    randomX = e.clientX - randomNum;
                } else {
                    randomX = e.clientX + randomNum;
                }
            }
        
            function genRandomY() {
                const randomOperator = Math.floor(Math.random() * 2);
                const randomNum = Math.floor(Math.random() * 50);
        
                if(randomOperator == 0) {
                    randomY = e.clientY - randomNum;
                } else {
                    randomY = e.clientY + randomNum;
                }
            }
        
            function genRandomSize() {
                const randomNum = Math.ceil(Math.random() * 5);
        
                if(randomNum == 0) {
                    randomSize = randomNum * 10;
                } else if (randomNum == 1) {
                    randomSize = randomNum * 10;
                } else if (randomNum == 2) {
                    randomSize = randomNum * 10;
                } else if (randomNum == 3) {
                    randomSize = randomNum * 10;
                } else if (randomNum == 4) {
                    randomSize = randomNum * 10;
                } else if (randomNum == 5) {
                    randomSize = randomNum * 10;
                }
        
            }
        
            function genRandomColor() {
                const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
                let hexColor = '#';
        
                for (let i = 0; i < 6; i++) {
                    let randomNum = Math.floor(Math.random() * hex.length);
                    hexColor += hex[randomNum];
                }
        
                // add opacity:
                hexColor += '99';
        
                randomColor = hexColor;
        
            }
        
            genRandomX();
            genRandomY();
            genRandomSize();
            genRandomColor();

            if(enableCircles) {
                // left, top, width, height
                drawCircle(randomX, randomY, randomSize, randomColor);
                drawCircle(randomX, randomY, randomSize, randomColor);
                drawCircle(randomX, randomY, randomSize, randomColor);
            }
    
    
        
        
            // interesting:
            /*
            drawTimerId = setInterval(function() {
                ctx.beginPath();
                // left, top, width, height
                ctx.rect(e.clientX, e.clientY, 50, 50);
                ctx.stroke();
            }, 1000)
            */
        })



})

linesBtn.addEventListener('click', function(){

    linesBtn.classList.toggle('active');

    if(linesBtn.classList.contains('active')) {
        enableLines = true;
    } else {
        enableLines = false;
    }

    
        canvas.addEventListener('mousemove', function(e) {
            let randomX;
            let randomY;
            let randomHeight = Math.ceil(Math.random() * 3);
            let randomWidth = Math.round((((Math.random() * 2) + 1) * 5) * 10)
            let randomColor;
        
            function genRandomX() {
                const randomOperator = Math.floor(Math.random() * 2);
                const randomNum = Math.floor(Math.random() * 50);
        
                if(randomOperator == 0) {
                    randomX = e.clientX - randomNum;
                } else {
                    randomX = e.clientX + randomNum;
                }
            }
        
            function genRandomY() {
                const randomOperator = Math.floor(Math.random() * 2);
                const randomNum = Math.floor(Math.random() * 50);
        
                if(randomOperator == 0) {
                    randomY = e.clientY - randomNum;
                } else {
                    randomY = e.clientY + randomNum;
                }
            }
        
        
            function genRandomColor() {
                const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
                let hexColor = '#';
        
                for (let i = 0; i < 6; i++) {
                    let randomNum = Math.floor(Math.random() * hex.length);
                    hexColor += hex[randomNum];
                }
        
                // add opacity:
                hexColor += '99';
        
                randomColor = hexColor;
        
            }
        
            genRandomX();
            genRandomY();
            genRandomColor();

            if(enableLines) {
                // left, top, width, height
                drawLine(randomX, randomY, randomWidth, randomHeight, randomColor);
                drawLine(randomX, randomY, randomWidth, randomHeight, randomColor);
                drawLine(randomX, randomY, randomWidth, randomHeight, randomColor);
            }
    
    
        
        
            // interesting:
            /*
            drawTimerId = setInterval(function() {
                ctx.beginPath();
                // left, top, width, height
                ctx.rect(e.clientX, e.clientY, 50, 50);
                ctx.stroke();
            }, 1000)
            */
        })



})

