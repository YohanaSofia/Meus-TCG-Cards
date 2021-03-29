const alterar = document.querySelector("#alterar");
let nomeCatrasto = document.querySelector("#nome-catrasto");
let sobrenomeCatrasto = document.querySelector("#sobrenome-catrasto");
let dataCatrasto = document.querySelector("#data-catrasto");
let emailCatrasto = document.querySelector("#email-catrasto");
let paisCatrasto = document.querySelector("#pais-catrasto");
let senhaCatrasto = document.querySelector("#senha-catrasto");

function alterarClasse() {
    const login = document.querySelector("#login");
    const cadrastro = document.querySelector("#cadrastro2");
    login.classList.add("oculto");
    cadrastro.classList.remove("oculto");
    alterar.classList.remove("oculto");
    return null;
}

function carregar() {
    nomeCatrasto.value = localStorage.getItem('nomePerfil');
    sobrenomeCatrasto.value = localStorage.getItem('sobrenomePerfil');
    dataCatrasto.value = localStorage.getItem('dataPerfil');
    emailCatrasto.value = localStorage.getItem('emailPerfil');
    paisCatrasto.value = localStorage.getItem('paisPerfil');
    senhaCatrasto.value = localStorage.getItem('senhaVerdadeira');
    return null;
}

function salvar() {
    let nomeValorCadrasto = nomeCatrasto.value;
    let sobrenomeValorCadrasto = sobrenomeCatrasto.value;
    let dataValorCadrasto = dataCatrasto.value;
    let emailValorCadrasto = emailCatrasto.value;
    let paisValorCadrasto = paisCatrasto.value;
    let senhaValorCadrasto = senhaCatrasto.value;
    localStorage.setItem('nomePerfil', nomeValorCadrasto);
    localStorage.setItem('sobrenomePerfil', sobrenomeValorCadrasto);
    localStorage.setItem('dataPerfil', dataValorCadrasto);
    localStorage.setItem('emailPerfil', emailValorCadrasto);
    localStorage.setItem('paisPerfil', paisValorCadrasto);
    localStorage.setItem('nomeVerdadeiro', nomeValorCadrasto);
    localStorage.setItem('senhaVerdadeira', senhaValorCadrasto);
    carregar();
    return null
}

alterar.addEventListener('click', salvar);
