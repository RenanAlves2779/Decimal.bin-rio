function convertToBinary() {
    // pega o valor digitado
    let decimal = document.getElementById("decimalInput").value;

    // verifica se foi digitado algo
    if (decimal === "") {
        document.getElementById("result").textContent = "Por favor, digite um número.";
        return;
    }

    // converte para número e depois para binário
    let binario = Number(decimal).toString(2);

    // exibe o resultado
    document.getElementById("result").textContent = "Binário: " + binario;
    console.log(binario);
}

function convertToDecimal() {
    let binario = document.getElementById("binaryInput").value;

    // verifica se o campo está vazio
    if (binario === "") {
        document.getElementById("resultDecimal").textContent = "Por favor, digite um número binário.";
        return;
    }

    // verifica se é binário válido (só pode conter 0 e 1)
    if (!/^[01]+$/.test(binario)) {
        document.getElementById("resultDecimal").textContent = "Número binário inválido! Use apenas 0 ou 1.";
        return;
    }

    // converte para decimal
    let decimal = parseInt(binario, 2);

    document.getElementById("resultDecimal").textContent = "Decimal: " + decimal;

    console.log(decimal);
}

