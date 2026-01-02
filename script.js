function calcularIMC () {

    //entrada de dados
    let valorPeso = document.getElementById("peso").value;
    let valorAltura = document.getElementById("altura").value;

    //processamento
    let valorIMC = valorPeso / (valorAltura * valorAltura );
    let formatado = valorIMC.toFixed(1); // fixa no número de casas (string)
    let numero = parseFloat(formatado); // Converte number
    
    let classificacao = numero;

    if (classificacao < 18.5) {
    classe = "Classificação: Abaixo do peso";//#DC143C cor
    } else if (classificacao >= 18.5 && classificacao <= 24.9) {
    classe = "Classificação: Peso Normal";//#008000 cor
    } else if (classificacao >= 25 && classificacao <= 29.9) {
    classe = "Classificação: Sobrepeso"; //#808000 cor
    } else if (classificacao >= 30 && classificacao <= 34.9) {
    classe = "Classificação: Obesidade Grau 1";//#DAA520 cor
    } else if (classificacao >= 35 && classificacao <= 39.9) {
    classe = "Classificação: Obesidade Grau 2";//#D2691E cor
    } else if (classificacao > 40) {
    classe = "Classificação: Obesidade Grau 3";//#8B0000 cor
    } 
    //alteração de cor com base no valor do imc
    let nivel = numero;
        let elemento = document.getElementById("card-nivel");

        elemento.classList.remove(
        "bg-AbaixoDoPeso",
        "bg-PesoNormal",
        "bg-SobrePeso",
        "bg-Obesidade1",
        "bg-Obesidade2",
        "bg-Obesidade3"
        );

        if (nivel < 18.5) {
        elemento.classList.add("bg-AbaixoDoPeso");//#DC143C cor
        } else if (nivel >= 18.5 && nivel < 24.9) {
        elemento.classList.add("bg-PesoNormal");//#008000 cor
        } else if (nivel >= 25 && nivel < 29.9) {
        elemento.classList.add("bg-SobrePeso");//#808000 cor
        } else if (nivel >= 30 && nivel < 34.9) {
        elemento.classList.add("bg-Obesidade1");//#DAA520 cor
        } else if (nivel >= 35 && nivel < 39.9) {
        elemento.classList.add("bg-Obesidade2"); //#D2691E cor
        } else if (nivel >40) {
        elemento.classList.add("bg-Obesidade3");//#8B0000 cor
        }

    //saída
    document.getElementById("resultado").textContent = "Valor IMC: " + numero;
    document.getElementById("classe").textContent = classe;

}