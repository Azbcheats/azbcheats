function adicionarAoCarrinho(produto) {
    const mensagem = document.getElementById("carrinhoMensagem");
    mensagem.innerText = `${produto} adicionado ao carrinho!`;
    mensagem.classList.remove("escondido");
    
    // Esconde a mensagem após 2 segundos
    setTimeout(() => {
        mensagem.classList.add("escondido");
    }, 2000);
}
