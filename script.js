// Aguarda o documento ser carregado
document.addEventListener("DOMContentLoaded", function() {
    
    // id de formulário
    const formContato = document.getElementById("form-contato");

    // faz o envio do formulário
    formContato.addEventListener("submit", function(event) {
        
        // carregar a página sem carregar de novo
        event.preventDefault(); 

        // valores do formulário
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // 1. Validação de campos
        if (nome === "" || email === "" || mensagem === "") {
            alert("Atenção: Por favor, preencha todos os campos antes de enviar.");
            return; // Interrompe a execução da função
        }

        // 2. Validação de e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Atenção: Por favor, insira um endereço de e-mail válido.");
            return;
        }

        // 3. simular envio
        alert("Mensagem enviada com sucesso!\n\nObrigado pelo contato, " + nome + ". Responderei em breve.");

        // 4. Limpezado formulário
        formContato.reset();
    });
});