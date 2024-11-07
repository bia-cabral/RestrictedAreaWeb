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