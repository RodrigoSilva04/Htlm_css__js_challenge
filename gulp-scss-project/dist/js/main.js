// Selecionar os elementos
let menu = document.querySelector('.menu-direita');
let botao = document.querySelector('.botao-seta');
let conteudo = document.querySelector('.conteudo');
let menuLateral = document.querySelector('.menu-lateral');
let botaoLateral = document.querySelector('.botao-lateral');
let spans = document.querySelectorAll('.items_menu span'); // Todos os spans dentro do menu


// Função para alternar a barra (abrir/fechar)
function toggleBarra() {
    menu.classList.toggle('fechar'); // Alterna entre aberto e fechado
    botao.classList.toggle('fechar'); // Alterna entre aberto e fechado
    conteudo.classList.toggle('fechar'); // Alterna entre aberto e fechado
    console.log('Cliquei no botão!'); // Mostra no console que o botão foi clicado
}

function toggleMenuLateral() {
    menuLateral.classList.toggle('aberto'); // Alterna entre aberto e fechado
    botaoLateral.classList.toggle('aberto'); // Alterna entre aberto e fechado
    spans.forEach((span) => {
        span.classList.toggle('aberto');
    });
    span.classList.toggle('aberto');
    document.querySelector('.item_menu a').removeAttribute('href');
    if(conteudo.classList.contains('aberto')) {
        conteudo.classList.remove('aberto');
    }else {
        conteudo.classList.add('aberto');
    }
    console.log('Cliquei no botão menulateral!'); // Mostra no console que o botão foi clicado
}

// Adicionar o evento de clique ao botão
botao.addEventListener('click', toggleBarra);
botaoLateral.addEventListener('click', toggleMenuLateral);
console.log('Cliquei no botão!'); // Mostra no console que o botão foi clicado
