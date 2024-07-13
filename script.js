
document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var mensagemErro = document.getElementById('mensagemErro');

    if (!nome || !email || !senha) {
        mensagemErro.textContent = 'Todos os campos devem ser preenchidos!';
    } else {
        mensagemErro.textContent = '';
        alert('Formulário enviado com sucesso!');
    }
});
