// Aguarda o documento ser totalmente carregado
document.addEventListener("DOMContentLoaded", function() {
    

    const formContato = document.getElementById("form-contato");

    formContato.addEventListener("submit", function(event) {
        
        event.preventDefault(); 

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // 1. validar de campos vazios
        if (nome === "" || email === "" || mensagem === "") {
            alert("Atenção: Por favor, preencha todos os campos antes de enviar.");
            return; 
        }

        // 2. validar formato de e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Atenção: Por favor, insira um endereço de e-mail válido.");
            return;
        }

        // 3. envio com sucesso
        alert("Mensagem enviada com sucesso!\n\nObrigado pelo contato, " + nome + ". Responderei em breve.");

        // 4. limpeza dos campos
        formContato.reset();
    });

    // tema escuro(dark)
    const btnTema = document.getElementById("btn-tema");

    btnTema.addEventListener("click", function() {
        document.body.classList.toggle("dark-theme");

        // mudar cor do botão de tema
        if (document.body.classList.contains("dark-theme")) {
            btnTema.textContent = "☀️ Tema Claro";
        } else {
            btnTema.textContent = "🌙 Tema Escuro";
        }
    });

});