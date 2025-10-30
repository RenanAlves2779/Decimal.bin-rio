function convertToBinary() {
    let decimal = document.getElementById("decimalInput").value;

    if (decimal === "") {
        document.getElementById("result").textContent = "Por favor, digite um número.";
        return;
    }

    decimal = Number(decimal);

    // chama a função recursiva
    let binario = decimalParaBinario(decimal);

    document.getElementById("result").textContent = "Binário: " + binario;
}


// ------- Função Recursiva --------
function decimalParaBinario(num) {
    if (num === 0) {          // caso base
        return "0";
    }
    if (num === 1) {          // caso base
        return "1";
    }

    // recursão: divide por 2 e concatena o resto
    return decimalParaBinario(Math.floor(num / 2)) + (num % 2);
}

function convertToDecimal() {
    let binario = document.getElementById("binaryInput").value;

    if (binario === "") {
        document.getElementById("resultDecimal").textContent = "Por favor, digite um número binário.";
        return;
    }

    // verifica se contém apenas 0 e 1
    if (!/^[01]+$/.test(binario)) {
        document.getElementById("resultDecimal").textContent = "Número binário inválido! Use apenas 0 ou 1.";
        return;
    }

    // chama a função recursiva
    let decimal = binarioParaDecimal(binario);

    document.getElementById("resultDecimal").textContent = "Decimal: " + decimal;
}


// --------- Função Recursiva ----------
function binarioParaDecimal(binario) {

    // caso base: quando sobrar só um dígito
    if (binario.length === 1) {
        return Number(binario);
    }

    // pega o primeiro dígito
    let primeiro = Number(binario[0]);

    // tamanho do restante (para saber a potência de 2)
    let tamanho = binario.length - 1;

    // recursão no restante da string
    return (primeiro * Math.pow(2, tamanho)) + binarioParaDecimal(binario.slice(1));
}



