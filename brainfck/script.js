let arr = new Array(50).fill(0);
let p = 0;

function checkChar(c) {
    switch (c) {
        case '+': arr[p] += 1; break;
        case '-': arr[p] -= 1; break;
        case '>': p++; break;
        case '<': p--; break;
        case '.':
            const outputElement = document.getElementById("output");
            outputElement.value += String.fromCharCode(arr[p]);
            break;
       
    }
}

function brainfuckCompiler() {
    document.getElementById("output").value="   ";
    arr = new Array(50).fill(0);
    p = 0;
    const code = document.getElementById("input").value;

    let loop = false;
    let loopInput = new Array(50).fill(0);
    let i = 0;

    for (let j = 0; j < code.length; j++) {
        let c = code[j];

        if (c === '[') {
            loop = true;
        } else if (c === ']') {
            while (arr[p] > 0 && arr[p] < 127) {
                for (let k = 0; k < i; k++) {
                    checkChar(loopInput[k]);
                }
            }
            i = 0;
            loop = false;
        } else if (loop) {
            loopInput[i++] = c;
        } else {
            checkChar(c);
        }
    }
}

