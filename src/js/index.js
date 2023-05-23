// alert("Hey!");

// passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
//getElementById consulta um id
// console.log(botaoAlterarTema)

// passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body

const body = document.querySelector("body"); //querySelector consulta um seletor..
// console.log(body);

const imagemBotaoTrocaTema = document.querySelector(".imagem-botao")

//passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {
    // quando clicar no botão, vai disparar o que está dentro da função

    //passo 6 - removar a classe do modo-escuro do body
const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")
    //constains retorna "true" ou "false" caso tenha a classe "modo-escuro"
console.log(modoEscuroEstaAtivo);

    body.classList.toggle("modo-escuro");
    //toggle ele ALTERNA entre modo-escuro on e off, logo não precisa "add" e "remove"

    if (modoEscuroEstaAtivo) {
        //passo 7 - remover a classe modo-escuro do body
        // body.classList.remove("modo-escuro");

        //passo 8 - trocar a imagem do botão de alterar tema pra sol
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/000sol.gif")

    } else {
    //passo 4 - adicionar a classe modo-escuro no body
    // body.classList.add("modo-escuro");

    //passo 5 - trocar a imagem do botão de alterar tema para lua
    imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/000lua.gif")
    }
})

