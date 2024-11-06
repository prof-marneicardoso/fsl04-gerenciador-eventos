
// Guarda o formulário ao carregar a página
const formularioEvento = document.querySelector('#formularioEvento');
// const formularioEvento = document.getElementById('formularioEvento'); // o mesmo que o de cima

formularioEvento.addEventListener('submit', (evento) => {
    // Previne o comportamento padrão do formulário
    evento.preventDefault();
    
    adicionarEvento();
});

// 1. Function para Adicionar um Novo Evento à LocalStorage
function adicionarEvento() {
    // Guarda os dados do formulário    
    const nomeEvento = formularioEvento.nomeEvento.value;
    const dataEvento = formularioEvento.dataEvento.value;

    // Busca os eventos existentes na LocalStorage ou cria um Array vazio
    const eventos = JSON.parse(localStorage.getItem('eventos')) || [];

    // Adiciona o novo evento no Array de Eventos
    eventos.push(
        {
            "nomeEvento": nomeEvento,
            "dataEvento": dataEvento
        }
    );

    // Salva o Array preenchido com o Novo Evento na LocalStorage
    localStorage.setItem('eventos', JSON.stringify(eventos));

    mostrarEventos();
}

// 2. Function para Mostrar os Eventos que hexistem na LocalStorage
function mostrarEventos() {
    // Busca os eventos existentes na LocalStorage ou cria um Array vazio
    const eventos = JSON.parse(localStorage.getItem('eventos')) || [];
    const listaEventos = document.querySelector('#listaEventos');
    listaEventos.innerHTML = '';

    // Cria um elemento <li> para cada evento
    eventos.forEach((evento) => {
        const item = document.createElement('li');
        item.textContent = evento.nomeEvento + ' - ' + evento.dataEvento;
        listaEventos.appendChild(item);
    });
}

// Mostra a lista de eventos ao carregar a página
mostrarEventos();