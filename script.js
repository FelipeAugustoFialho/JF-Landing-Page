const menuGaleria = [
    { name: 'corte-1', category: "cortes", src: "./img/corte1.jpg" },
    { name: 'corte-2', category: "cortes", src: "./img/corte2.jpg" },
    { name: 'corte-3', category: "cortes", src: "./img/corte3.jpg" },
    { name: 'corte-4', category: "cortes", src: "./img/corte4.jpg" },
    { name: 'infantil-1', category: "infantil", src: "./img/infantil.jpg" },
    { name: 'barba-1', category: "barbas", src: "./img/barba.JPG" },
    { name: 'barba-2', category: "barbas", src: "./img/barbaJ.jpg" },
];

const buttonCortes = document.querySelector('#cortes');
const buttonBarba = document.querySelector('#barbas');
const buttonQuimica = document.querySelector('#quimicas');
const buttonInfantil = document.querySelector('#infantil');
const buttonMostrarTudo = document.querySelector('#all');
let list = document.querySelector('.galeriaImg');

function showGaleria(category) {
    let myLi = '';
    menuGaleria.forEach(item => {
        if (category === 'all' || item.category === category) {
            myLi += `
                <li class="bordaFotos">
                    <img src="${item.src}" alt="${item.name}" class="imgCortes">
                </li>
            `;
        }
    });
    list.innerHTML = myLi;
}

// Evento para mostrar a galeria de fotos
buttonCortes.addEventListener('click', () => showGaleria('cortes'));
buttonBarba.addEventListener('click', () => showGaleria('barbas'));
buttonQuimica.addEventListener('click', () => showGaleria('quimicas'));
buttonInfantil.addEventListener('click', () => showGaleria('infantil'));
buttonMostrarTudo.addEventListener('click', () => showGaleria('all'));

const buttonAgendar = document.querySelector('#contato');
const buttonAgendar2 = document.querySelector('#contato2');
const buttonServicos = document.querySelector('.button-transparent');

function agendar() {
    window.open("https://contate.me/jfbarbeariaoficial", "_blank");
}

function irParaServicos() {
    const sectionServicos = document.querySelector('#servicos');
    sectionServicos.scrollIntoView({ behavior: 'smooth' }); // Rolagem suave para a seção
}

buttonAgendar.addEventListener('click', agendar);
buttonAgendar2.addEventListener('click', agendar);
buttonServicos.addEventListener('click', irParaServicos);

// Selecionar todos os links de navegação
const linksHeader = document.querySelectorAll('.linksHeader');

// Adicionar evento de clique para cada link
linksHeader.forEach(link => {
    link.addEventListener('click', (event) => {
        // Impede o comportamento padrão de navegação
        event.preventDefault();

        // Obtém o ID da seção (sem o #)
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.querySelector(`#${targetId}`); // Seleciona a seção

        // Rolagem suave até a seção
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});


