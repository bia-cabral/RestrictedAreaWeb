document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const botaoTema = document.getElementById('mudar-tema');
    
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo) {
        container.className = `container ${temaSalvo}`;
    }
    else {
        container.className = 'container tema-claro';
    }
    
    botaoTema.addEventListener('click', () => {
        const temaClaro = container.classList.contains('tema-claro');
        const novoTema = temaClaro ? 'tema-escuro' : 'tema-claro';
        
        container.className = `container ${novoTema}`;
        localStorage.setItem('tema', novoTema);
    });
});

const simplesContainer = document.getElementById('simples-container');
const avancadoContainer = document.getElementById('avancado-container');
const modal = document.getElementById('modal');
const modalIframe = document.getElementById('modal-iframe');
const closeModal = document.getElementById('close-modal');

function openModal(iframeSrc) {
    modal.style.display = 'flex';
    modalIframe.src = iframeSrc; 
    modalIframe.style.pointerEvents = 'auto';
}

simplesContainer.addEventListener('click', () => openModal(document.getElementById('simples').src));
avancadoContainer.addEventListener('click', () => openModal(document.getElementById('avancado').src));

function closeModalFunc() {
    modal.style.display = 'none';
    modalIframe.src = '';
    modalIframe.style.pointerEvents = 'none';
}

closeModal.addEventListener('click', closeModalFunc);

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModalFunc();
    }
});