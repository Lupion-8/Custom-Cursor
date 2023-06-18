
// Crie um elemento div
var cursor = document.createElement('div');

// Adicione a classe "m" ao elemento div
cursor.classList.add('m');

// Adicione o elemento div ao corpo do documento
document.body.appendChild(cursor);


// pega o elemento div e atualiza a posição para a mesma do cursor sempre que se mover
const mouse = document.querySelector('.m');
document.addEventListener('mousemove', (event) => {
    mouse.style.left = event.pageX + 'px';
    mouse.style.top = event.pageY + 'px';
});
