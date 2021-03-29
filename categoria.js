const paragravo = document.querySelector("#paragravo");
const categoria = document.querySelector("#categoria");
const botao2 = document.querySelector("#salvar");
const botao = document.querySelector("#proximo");

function categoria2() {
    botao2.classList.remove("oculto");
    botao.classList.add("oculto");
    let categoriaValor = categoria.value;
    if (categoriaValor == "Treinador")
    {
        treinador();
    }
    if (categoriaValor == "Pokemon")
    {
        pokemon();
    }
    if (categoriaValor == "Energia")
    {
        energia();
    }
    return null;
}

function criarParagravo(id) {
    let novoParagravo = document.createElement('p');
    novoParagravo.classList.add(id);
    paragravo.appendChild(novoParagravo);
    return null;
}

function criarLabel(escrito, pId) {
    let novoParagravo = document.querySelectorAll("."+pId+"");
    let novoLabel = document.createElement('label');
    novoLabel.innerHTML = escrito;
    novoParagravo[0].appendChild(novoLabel);
    return null;
}

function criarInput(idP, id) {
    let novoParagravo = document.querySelectorAll("."+idP+"");
    let novoInput = document.createElement("input");
    novoInput.classList.add(id);
    novoParagravo[0].appendChild(novoInput);
    return null;
}

function criarSelect(pId, id) {
    let novoParagravo = document.querySelectorAll("."+pId+"");
    let novoSelect = document.createElement("select");
    novoSelect.classList.add(id);
    novoParagravo[0].appendChild(novoSelect);
    return null;
}

function criarOpton1(sId, valor1, valor2, valor3, valor4, valor5) {
    novoSelect = document.querySelectorAll("."+sId+"");
    novoSelect[0].innerHTML = "<option value="+valor1+">"+valor1+"</option><option value="+valor2+">"+valor2+"</option><option value="+valor3+">"+valor3+"</option><option value="+valor4+">"+valor4+"</option><option value="+valor5+">"+valor5+"</option>";
    return null;
}

function criarOpton2(sId, valor1, valor2) {
    novoSelect = document.querySelectorAll("."+sId+"");
    novoSelect[0].innerHTML = "<option value="+valor1+">"+valor1+"</option><option value="+valor2+">"+valor2+"</option>";
    return null;
}

function treinador() {
    criarParagravo("pNome");
    criarParagravo("pRaridade");
    criarParagravo("pApoiador");
    criarParagravo("pLocal");
    criarParagravo("pData");
    criarParagravo("pColecao");
    criarLabel("Nome da carta: ", "pNome");
    criarLabel("Raridade da carta: ", "pRaridade");
    criarLabel("Selecione apoiador ou item: ", "pApoiador");
    criarLabel("Onde guardou a carta: ", "pLocal");
    criarLabel("Data que adqueriu a carta: ", "pData");
    criarLabel("Qual a colecao da carta: ", "pColecao");
    criarInput("pNome", "nome");
    criarInput("pLocal", "local");
    criarInput("pData", "data");
    criarInput("pColecao", "colecao");
    criarSelect("pRaridade", "raridade");
    criarOpton1("raridade", "comum", "incomum", "rara", "promocional", "ultra-rara");
    criarSelect("pApoiador", "apoiador");
    criarOpton2("apoiador", "apoiador", "item");
    return null;
}

function pokemon() {
    criarParagravo("pNome");
    criarParagravo("pColecao");
    criarParagravo("pLocal");
    criarParagravo("pData");
    criarParagravo("pRaridade");
    criarParagravo("pElemento");
    criarParagravo("pShiny");
    criarLabel("Nome da carta: ", "pNome");
    criarLabel("Qual a colecao da carta: ", "pColecao");
    criarLabel("Onde guardou a carta: ", "pLocal");
    criarLabel("Data que adqueriu a carta: ", "pData");
    criarLabel("Raridade da carta: ", "pRaridade");
    criarLabel("Qual o elemento: ", "pElemento");
    criarLabel("Shiny: ", "pShiny");
    criarInput("pNome", "nome");
    criarInput("pLocal", "local");
    criarInput("pData", "data");
    criarInput("pColecao", "colecao");
    criarInput("pElemento", "elemento");
    criarSelect("pRaridade", "raridade");
    criarOpton1("raridade", "comum", "incomum", "rara", "promocional", "ultra-rara");
    criarSelect("pShiny", "shiny");
    criarOpton2("shiny", "Shiny", "normal");
    return null;
}

function energia() {
    criarParagravo("pLocal");
    criarParagravo("pData");
    criarParagravo("pRaridade");
    criarParagravo("pElemento");
    criarLabel("Onde guardou a carta: ", "pLocal");
    criarLabel("Data que adqueriu a carta: ", "pData");
    criarLabel("Raridade da carta: ", "pRaridade");
    criarLabel("Qual o elemento: ", "pElemento");
    criarInput("pLocal", "local");
    criarInput("pData", "data");
    criarSelect("pRaridade", "raridade");
    criarOpton1("raridade", "comum", "incomum", "rara", "promocional", "ultra-rara");
    criarInput("pElemento", "elemento");
    return null;
}

botao.addEventListener("click", categoria2);
