// Selecionar os elementos
let menu = document.querySelector('.menu-right');
let botao = document.querySelector('.button-arrow');
let content = document.querySelector('.content');
let menuLateral = document.querySelector('.menu-left');
let botaoLateral = document.querySelector('.button-side');
let spans = document.querySelectorAll('.items_menu span'); // Todos os spans dentro do menu


// Função para alternar a barra (open/close)
function toggleBarra() {
    menu.classList.toggle('close'); // Alterna entre open e closed
    botao.classList.toggle('close'); // Alterna entre open e closed
    content.classList.toggle('close'); // Alterna entre open e closed
    console.log('Cliquei no botão!'); // Mostra no console que o botão foi clicado
}

function toggleMenuLateral() {
    menuLateral.classList.toggle('open'); // Alterna entre open e closed
    botaoLateral.classList.toggle('open'); // Alterna entre open e closed
    content.classList.toggle('open'); // Alterna entre open e closed
    spans.forEach((span) => {
        span.classList.toggle('open');
    });
    span.classList.toggle('open');
    document.querySelector('.item_menu a').removeAttribute('href');
    console.log('Cliquei no botão menulateral!'); // Mostra no console que o botão foi clicado
}

// Adicionar o evento de clique ao botão
botao.addEventListener('click', toggleBarra);
botaoLateral.addEventListener('click', toggleMenuLateral);
console.log('Cliquei no botão!'); // Mostra no console que o botão foi clicado
