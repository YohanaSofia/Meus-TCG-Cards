const carta = document.querySelector("#todas-cartas");

let informacoesStringPokemon = localStorage.getItem('informacoesPokemon');
let informacoesPokemon1 = JSON.parse(informacoesStringPokemon);
let informacoesStringTreinador = localStorage.getItem('informacoesTreinador');
let informacoesTreinador1 = JSON.parse(informacoesStringTreinador);
let informacoesStringEnergia = localStorage.getItem('informacoesEnergia');
let informacoesEnergia1 = JSON.parse(informacoesStringEnergia);
let contadorEnrgia1 = localStorage.getItem('contadorEnergia');
let contadorPokemon1 = localStorage.getItem('contadorPokemon');
let contadorTreinador1 = localStorage.getItem('contadorTreinador');

function adicionarEnergia(dados) {
    let inserir = document.createElement('div');
    inserir.classList.add("carta");
    inserir.classList.add("energia");
    carta.appendChild(inserir);
    let inserirCarta = document.createElement('ul');
    inserirCarta.classList.add("quadrado");
    inserir.appendChild(inserirCarta);
    let inserirTipo = document.createElement('li');
    let inserirLocal = document.createElement('li');
    let inserirData = document.createElement('li');
    let inserirRaridade = document.createElement('li');
    inserirTipo.innerHTML = "Energia";
    inserirLocal.innerHTML = dados.local;
    inserirData.innerHTML = dados.data;
    inserirRaridade.innerHTML = dados.raridade;
    inserirCarta.appendChild(inserirTipo);
    inserirCarta.appendChild(inserirLocal);
    inserirCarta.appendChild(inserirData);
    inserirCarta.appendChild(inserirRaridade);
    return null;
}

function adicionarPokemon(dados) {
    let inserir = document.createElement('div');
    inserir.classList.add("carta");
    inserir.classList.add("pokemon");
    carta.appendChild(inserir);
    let inserirCarta = document.createElement('ul');
    inserirCarta.classList.add("quadrado");
    inserir.appendChild(inserirCarta);
    let inserirTipo = document.createElement('li');
    let inserirNome = document.createElement('li');
    let inserirColecao = document.createElement('li');
    let inserirLocal = document.createElement('li');
    let inserirData = document.createElement('li');
    let inserirRaridade = document.createElement('li');
    let inserirElemento = document.createElement('li');
    let inserirShiny = document.createElement('li');
    inserirTipo.innerHTML = "Pokemon";
    inserirNome.innerHTML = dados.nome;
    inserirColecao.innerHTML = dados.colecao;
    inserirLocal.innerHTML = dados.local;
    inserirData.innerHTML = dados.data;
    inserirRaridade.innerHTML = dados.raridade;
    inserirElemento.innerHTML = dados.elemento;
    inserirShiny.innerHTML = dados.shiny;
    inserirCarta.appendChild(inserirTipo);
    inserirCarta.appendChild(inserirNome);
    inserirCarta.appendChild(inserirColecao);
    inserirCarta.appendChild(inserirLocal);
    inserirCarta.appendChild(inserirData);
    inserirCarta.appendChild(inserirRaridade);
    inserirCarta.appendChild(inserirElemento);
    inserirCarta.appendChild(inserirShiny);
    return null;
}

function adicionarTreinador(dados) {
    let inserir = document.createElement('div');
    inserir.classList.add("carta");
    inserir.classList.add("treinador");
    carta.appendChild(inserir);
    let inserirCarta = document.createElement('ul');
    inserirCarta.classList.add("quadrado");
    inserir.appendChild(inserirCarta);
    let inserirTipo = document.createElement('li');
    let inserirNome = document.createElement('li');
    let inserirRaridade = document.createElement('li');
    let inserirApoiador = document.createElement('li');
    let inserirLocal = document.createElement('li');
    let inserirData = document.createElement('li');
    let inserirColecao = document.createElement('li');
    inserirTipo.innerHTML = "Treinador";
    inserirNome.innerHTML = dados.nome;
    inserirRaridade.innerHTML = dados.raridade;
    inserirApoiador.innerHTML = dados.apoiador;
    inserirLocal.innerHTML = dados.local;
    inserirData.innerHTML = dados.data;
    inserirColecao.innerHTML = dados.colecao;
    inserirCarta.appendChild(inserirTipo);
    inserirCarta.appendChild(inserirNome);
    inserirCarta.appendChild(inserirRaridade);
    inserirCarta.appendChild(inserirApoiador);
    inserirCarta.appendChild(inserirLocal);
    inserirCarta.appendChild(inserirData);
    inserirCarta.appendChild(inserirColecao);
    return null;
}

for (let i = 0; i <= contadorEnrgia1; i++)
{
    adicionarEnergia(informacoesEnergia1[i]);
}

for (let i = 0; i <= contadorPokemon1; i++)
{
    adicionarPokemon(informacoesPokemon1[i]);
}

for (let i = 0; i <= contadorTreinador1; i++)
{
    adicionarTreinador(informacoesTreinador1[i]);
}