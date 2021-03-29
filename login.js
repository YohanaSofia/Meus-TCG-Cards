const botaoLogar = document.querySelector("#logar");
const nomeLogin = document.querySelector("#login-nome");
const senha = document.querySelector("#senha");
const mensagem = document.querySelector("#mensagem");
const botaoCadrastrar = document.querySelector("#cadrastro");
const botaoNudar = document.querySelector("#esqueceu");
const salvarSenha = document.querySelector("#salvar-senha");
let nomeVerdadeiro;
let senhaVerdadeira;
nomeVerdadeiro = localStorage.getItem('nomeVerdadeiro');
senhaVerdadeira = localStorage.getItem('senhaVerdadeira');

function verificacao() {
    let nomeLoginValor = nomeLogin.value;
    let senhaValor = senha.value;
    mensagem.classList.add("oculto");
    if (nomeVerdadeiro == nomeLoginValor && senhaVerdadeira == senhaValor)
    {
        alterarClasse();
        carregar();
    }
    else 
    {
        mensagem.classList.remove("oculto");
    }

    return null;
}

function cadrastro() {
    alterarClasse();
    salvar();
    return null;
}

function mudarSenha() {
    const alterarSenha = document.querySelector("#alterar-senha");
    alterarSenha.classList.remove("oculto");
    login.classList.add("oculto");
    return null;
}

function atualizar() {
    const nomeVerificar = document.querySelector("#nome-alterar");
    const dataVerificar = document.querySelector("#data-alterar");
    const senhaNova = document.querySelector("#senha-nova");
    let nomeVerificarValor = nomeVerificar.value;
    let dataVerificarValor = dataVerificar.value;
    let senhaNovaValor = senhaNova.value;
    let data2 = localStorage.getItem('dataPerfil');
    if (data2 == dataVerificarValor)
    {
        if (nomeVerdadeiro == nomeVerificarValor)
        {
            localStorage.setItem('senhaVerdadeira', senhaNovaValor);
            const alterarSenha = document.querySelector("#alterar-senha");
            alterarSenha.classList.add("oculto");
            login.classList.remove("oculto");
        }
        else
        {
            const mensagem2 = document.querySelector("#mensagem2");
            mensagem2.classList.remove('oculto');
        }
    }
    else
    {
        const mensagem2 = document.querySelector("#mensagem2");
        mensagem2.classList.remove('oculto');
    }
    return null;
}

function vibrar() {
    navigator.vibrate([500]);
    return null;
}

botaoLogar.addEventListener('click', vibrar);
botaoLogar.addEventListener('click', verificacao);
botaoCadrastrar.addEventListener('click', cadrastro);
botaoCadrastrar.addEventListener('click', vibrar);
botaoNudar.addEventListener('click', mudarSenha);
salvarSenha.addEventListener('click', atualizar);