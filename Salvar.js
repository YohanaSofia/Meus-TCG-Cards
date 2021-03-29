const categoria1 = document.querySelector("#categoria");
let contadorEnrgia = -1;
let contadorPokemon = -1;
let contadorTreinador = -1; 
let ax;
ax = localStorage.getItem('ax');

let informacoesPokemon = [];
let informacoesEnergia = [];
let informacoesTreinador = [];

if (ax == null || ax == 0)
{
    localStorage.setItem('contadorEnergia', contadorEnrgia);
    localStorage.setItem('contadorPokemon', contadorPokemon);
    localStorage.setItem('contadorTreinador', contadorTreinador);
    ax = 1;
    localStorage.setItem('ax', ax);
}

function apagar() {
    paragravo.innerHTML = "";
    botao.classList.remove("oculto");
    botao2.classList.add("oculto");
}

function salvar() {
    let categoriaValor = categoria1.value;
    let contadorEnrgia = localStorage.getItem('contadorEnergia');
    let contadorPokemon = localStorage.getItem('contadorPokemon');
    let contadorTreinador = localStorage.getItem('contadorTreinador');
    
    if (contadorEnrgia >= 0)
    {
        informacoesEnergia = localStorage.getItem('informacoesEnergia');
        informacoesEnergia = JSON.parse(informacoesEnergia);
    }
    if (contadorPokemon >= 0)
    {
        informacoesPokemon = localStorage.getItem('informacoesPokemon');
        informacoesPokemon = JSON.parse(informacoesPokemon);
    }
    if (contadorTreinador >= 0)
    {
        informacoesTreinador = localStorage.getItem('informacoesTreinador');   
        informacoesTreinador = JSON.parse(informacoesTreinador);
    }

    if (categoriaValor == "Treinador")
    {
        contadorTreinador++;
        salvarTreinador();
        localStorage.setItem('contadorTreinador', contadorTreinador);
    }
    if (categoriaValor == "Pokemon")
    {
        contadorPokemon++;
        salvarPokemon();
        localStorage.setItem('contadorPokemon', contadorPokemon);
    }
    if (categoriaValor == "Energia")
    {
        contadorEnrgia++;
        salvarEnergia();
        localStorage.setItem('contadorEnergia', contadorEnrgia);
    }
    return null;
}

function salvarTreinador() {
    const data = document.querySelectorAll(".data");
    const local = document.querySelectorAll(".local");
    const nome = document.querySelectorAll(".nome");
    const raridade = document.querySelectorAll(".raridade");
    const colecao = document.querySelectorAll(".colecao");
    const apoiador = document.querySelectorAll(".apoiador");
    let nomeValor = nome[0].value;
    let dataValor = data[0].value;
    let localValor = local[0].value;
    let raridadeValor = raridade[0].value;
    let colecaoValor = colecao[0].value;
    let apoiadorValor = apoiador[0].value;
    informacoesTreinador.push( {
                                    nome: nomeValor,
                                    raridade: raridadeValor,
                                    apoiador: apoiadorValor,
                                    local: localValor,
                                    data: dataValor,
                                    colecao: colecaoValor
                                }
                            );
    localStorage.setItem('informacoesTreinador', JSON.stringify(informacoesTreinador));
    apagar();
    return null;
}

function salvarPokemon() {
    const data = document.querySelectorAll(".data");
    const local = document.querySelectorAll(".local");
    const nome = document.querySelectorAll(".nome");
    const raridade = document.querySelectorAll(".raridade");
    const colecao = document.querySelectorAll(".colecao");
    const elemento = document.querySelectorAll(".elemento");
    const shiny = document.querySelectorAll(".shiny");
    let dataValor = data[0].value;
    let localValor = local[0].value;
    let nomeValor = nome[0].value;
    let raridadeValor = raridade[0].value;
    let colecaoValor = colecao[0].value;
    let elementoValor = elemento[0].value;
    let shinyValor = shiny[0].value;
    informacoesPokemon.push( {
                                nome: nomeValor,
                                colecao: colecaoValor,
                                local:  localValor,
                                data: dataValor,
                                raridade: raridadeValor,
                                elemento: elementoValor,
                                shiny: shinyValor
                                }
                            );
    localStorage.setItem('informacoesPokemon', JSON.stringify(informacoesPokemon));
    apagar();
    return null;
}

function salvarEnergia() {
    const data = document.querySelectorAll(".data");
    const local = document.querySelectorAll(".local");
    const raridade = document.querySelectorAll(".raridade");
    const elemento = document.querySelectorAll(".elemento");
    let dataValor = data[0].value;
    let localValor = local[0].value;
    let raridadeValor = raridade[0].value;
    let elementoValor = elemento[0].value;
    informacoesEnergia.push( {
                                    elemento: elementoValor,
                                    local: localValor,
                                    data: dataValor,
                                    raridade: raridadeValor
                                }
                            );
    localStorage.setItem('informacoesEnergia', JSON.stringify(informacoesEnergia));
    apagar();
    return null;
}

function vibrar() {
    navigator.vibrate([500]);
    return null;
}

botao2.addEventListener("click", salvar);
botao.addEventListener('click', vibrar);
botao2.addEventListener('click', vibrar);