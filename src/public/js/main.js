let socket = io();
let form = document.querySelector('form');
let input = document.querySelector('input');
let messages = document.querySelector('ul');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    socket.emit('chat', input.value);
    input.value = '';
});

socket.on('chat', (msg) => {
    let item = document.createElement('li');
    item.innerHTML = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});