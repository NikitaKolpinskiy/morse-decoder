const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const arrayLetters = []
    expr = expr.split("")
    for (let i = 0, j = 0; i < expr.length; i++) {
        if (!arrayLetters[j]) {
            arrayLetters[j] = expr[i]
        } else {
            arrayLetters[j] += expr[i]
        }
        if ((i + 1) % 10 === 0 && i !== 0) {
            j++
        }
    }
    for (let i = 0; i < arrayLetters.length; i++) {
        let liter = []
        for (let j = arrayLetters[i].length; j > 1; j -= 2) {
            if (arrayLetters[i].slice(j - 2, j) === "10") {
                liter.unshift(".")
            } else if (arrayLetters[i].slice(j - 2, j) === "11") {
                liter.unshift("-")
            } else if (arrayLetters[i].slice(j - 2, j) === "**") {
                liter.unshift("*")
            }
        }
        liter = liter.join('')
        if (liter == "*****") {
            liter = " "
        } else {
            liter = MORSE_TABLE[liter]
        }
        arrayLetters[i] = liter
    }

    return arrayLetters.join("")
}

module.exports = {
    decode
}