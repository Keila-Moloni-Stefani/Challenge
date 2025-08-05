let amigos = [];

// Adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
            
    // Verificar se o campo não está vazio
    if (nome === '') {
        alert('Por favor, digite um nome!');
        input.focus();
        return;
    }
            
    // Verificar se o nome já existe na lista
    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        input.focus();
        return;
    }
    
    // Atualizar o array
    amigos.push(nome);

    // Limpar o campo de entrada
    input.value = '';
    input.focus();

    // Atualizar a exibição da lista
    exibirAmigos();

    // Limpar resultado anterior se existir
    limparResultado();
}

// Exibir a lista de amigos e percorrer o array, adicionando cada nome como elemento <li>
function exibirAmigos() {
    const lista = document.getElementById('listaAmigos');
            
    // Verificar se o elemento existe
    if (!lista) {
        console.error('Elemento listaAmigos não encontrado!');
        return;
    }

    // Limpar a lista existente
    lista.innerHTML = '';

    // Percorrer o array usando loop for e criar o HTML
    for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

//Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
    alert('Adicione pelo menos um amigo antes de sortear!');
    return;
    }
            
    // Gerar um índice aleatório e obter o nome sorteado
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
            
    // Exibe o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}

//Função auxiliar para limpar o resultado anterior
function limparResultado() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}

// Permite adicionar amigo pressionando Enter
function configurarEventos() {
    const input = document.getElementById('amigo');
        
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            adicionarAmigo();
        }
    })
    
    // Focar no campo de input ao carregar a página
   input.focus();
}

// Inicializar eventos quando a página carregar
document.addEventListener('DOMContentLoaded', configurarEventos); 