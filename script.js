//Declaração das variáveis
const form = document.querySelector("#imcForm");
const alturaInput = document.querySelector("#altura");
const pesoInput = document.querySelector("#peso");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", function (event) {

  event.preventDefault();
    const altura = Number(alturaInput.value);
    const peso = Number(pesoInput.value);

    //Validação dos campos
    if (!altura || !peso) {
        mostrarErro("Preencha todos os campos.");
        return;
    }

    if (altura <= 0 || peso <= 0) {
        mostrarErro("Digite valores maiores que zero.");
        return;
    }

    //Cálculo do IMC
    const imc = peso / (altura * altura);
    const imcFinal = imc.toFixed(2);
    const classificacao = classificarIMC(imc);

    //Exibe o resultado
    mostrarResultado(imcFinal, classificacao);
});

//Classificação do IMC de acordo com o resultado
function classificarIMC(imc) {
    if (imc < 18.5) {
        return {
            nome: "Abaixo do peso",
            classe: "abaixo"
        };
    } else if (imc < 25) {
        return {
            nome: "Peso normal",
            classe: "normal"
        };
    } else if (imc < 30) {
        return {
            nome: "Sobrepeso",
            classe: "sobrepeso"
        };
    } else if (imc < 35) {
        return {
            nome: "Obesidade grau I",
            classe: "obesidade"
        };
    } else if (imc < 40) {
        return {
            nome: "Obesidade grau II",
            classe: "obesidade"
        };
    } else {
        return {
            nome: "Obesidade grau III",
            classe: "obesidade"
        };
    }
}

function mostrarResultado(imc, classificacao) {
    resultado.className = `resultado ${classificacao.classe}`;
    resultado.innerHTML = `
        <span class="resultado_label">
            Seu IMC é
        </span>
        <strong class="valor_imc">
            ${imc}:
        </strong>
        <span class="classificacao">
            ${classificacao.nome}
        </span>
    `;
}

function mostrarErro(mensagem) {
    resultado.className = "resultado erro";
    resultado.innerHTML = `
        <p>
            ⚠️ ${mensagem}
        </p>
    `;
}