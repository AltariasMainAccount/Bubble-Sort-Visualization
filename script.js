var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

const ARRAY_LENGTH = 3000;
const ATTEMPTS = 3000;

var counter = 0;

// Utility


// Visualize Array on Canvas

function drawArray(array) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    array.forEach((y, x) => {
        ctx.beginPath();
        ctx.moveTo(x, c.height);
        ctx.lineTo(x, (c.height - y * 3));
        ctx.stroke();
    });
}

// Randomize the Array

function shuffleArray(array){
    console.log("Shuffling Array.")
    array.sort((a,b) => {
        return Math.random() - 0.5;
    });
}

var intArray = Array.from(Array(ARRAY_LENGTH)).map((x, i) => i); // Array of Length

// Bubble Sorting Algorithm

function bsort_sRun(array) { // bsort_sRun = Bubble Sort Single Run
    let len = array.length;
    for(let j = 0; j < len; j++) {
        if(array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

function bubbleSort(array) { // bubbleSort = Bubble Sort Full Runthrough
    let len = array.length;
    for(let i = 0; i < ATTEMPTS; i++) {
        for(let j = 0; j < len; j++) {
            if (array[j] > array[j + 1]) { // Swapper [element swapper]
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}


// Main Function

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function main() {
    for (let i = 0; i < ATTEMPTS; i++) {
        await sleep(10);
        bsort_sRun(intArray);
        drawArray(intArray);
    }
}


// First Draw - Shuffle and Draw the array for the first time.
shuffleArray(intArray);
drawArray(intArray);

// Iteration

main();