function inverterString(string){
    let stringRevertida = ""
    for (let i = string.length - 1; i >= 0; i--) {
        stringRevertida += string[i]
    }
    return stringRevertida
}

let palavra = "target sistemas"
console.log(inverterString(palavra))