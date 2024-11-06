console.log(document.body.classList);

function toggleTheme() {
    const container = document.querySelector('.container');
    container.classList.toggle('dark-theme');
    container.classList.toggle('light-theme');

    if (container.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const container = document.querySelector('.container');
    
    if (savedTheme === 'dark') {
        container.body.classList.add('dark-theme');
        container.body.classList.remove('light-theme');

        console.log(container.body.classList);
        
    } else {
        container.body.classList.remove('dark-theme');
        container.body.classList.add('light-theme');

        console.log(container.body.classList);
    }   
}

const toggleButton = document.getElementById('toggle-theme');
toggleButton.addEventListener('click', toggleTheme);

loadTheme();