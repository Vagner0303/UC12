// Guarda qual pergunta está ativa (começa na posição 0 da array)
let currentQuestionIndex = 0;

// PEga todos as perguntas do HTML

// document.getElementById -> pega apenas um Elemento
//  document.querySelectAll -> pega TODOS os elementos de uma classe e retorna uma lista(tipo array)
const questions = document.querySelectorAll(".quiz-question")
//Função para ativar a proxima perguntas
function activateQuestion(){
/*
     questions[currentQuestionIndex] -> acessa a pergunta atual dentro da lista

     classList.add("active") -> adiciona a classe "active"
     Essa classe fas a pergunta aparecer na tela (via css)

*/
    questions[currentQuestionIndex].classList.add("active")
}

function answer(isCorrect) {

if(isCorrect) {
/*
    classList.remove("active") -> remove a classe
    Isso faz a pergunta atual sumir da tela
*/
    questions[currentQuestionIndex].classList.remove("active");
/*
    Avança para a proxima pergunta
    currentQuestionIndex + 1 -> vai para a proxima posição da array
*/
    currentQuestionIndex = currentQuestionIndex + 1;
// Ativa (mostra) a proxima pergunta
    activateQuestion();
} else {

// Se estiver errada
console.log("Errouuu!!!");

}
}

// Seleciona todos os botões de resposta
const buttons = document.querySelectorAll(".quiz-option")

/*
Percorre todos os botões
buttons.Length -> quantidade de botões
*/

for (let i = 0; i < buttons.length; i++) {
/*
    addEventListener -> adiciona um evento ao botão 
    "click" -> quando clicar
*/
buttons[i].addEventListener("click", () => {
/*
   classList.contains("corrent") -> verifica se o botão tem a classe "correct"

   Se tiver -> retorna true (resposta correta)
   Se não tiver -> retorna false (resposta errada)
*/
const isCorrect = buttons[i].classList.contains("correct");

// Chama a função principal passando true ou false
answer(isCorrect);

})

}


