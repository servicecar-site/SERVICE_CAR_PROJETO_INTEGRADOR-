
const form = document.getElementById("formCadastro");

const cep = document.getElementById("cep");
const telefone = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem");

// Máscara do CEP
cep.addEventListener("input", function () {

    let valor = cep.value.replace(/\D/g, "");

    valor = valor.substring(0, 8);

    if (valor.length > 5) {
        valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");
    }

    cep.value = valor;
});

// Máscara do telefone
telefone.addEventListener("input", function () {

    let valor = telefone.value.replace(/\D/g, "");

    valor = valor.substring(0, 11);

    if (valor.length > 10) {
        valor = valor.replace(
            /^(\d{2})(\d{5})(\d{4})$/,
            "($1) $2-$3"
        );
    } else if (valor.length > 6) {
        valor = valor.replace(
            /^(\d{2})(\d{4})(\d+)/,
            "($1) $2-$3"
        );
    } else if (valor.length > 2) {
        valor = valor.replace(
            /^(\d{2})(\d+)/,
            "($1) $2"
        );
    }

    telefone.value = valor;
});

// Finalização do cadastro
form.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const valorCep = cep.value.replace(/\D/g, "");
    const valorTelefone = telefone.value.replace(/\D/g, "");

    if (nome === "" || email === "") {
        mensagem.style.color = "red";
        mensagem.textContent = "Preencha todos os campos!";
        return;
    }

    if (valorCep.length !== 8) {
        mensagem.style.color = "red";
        mensagem.textContent = "Digite um CEP válido!";
        return;
    }

    if (valorTelefone.length < 10) {
        mensagem.style.color = "red";
        mensagem.textContent = "Digite um telefone válido!";
        return;
    }

    mensagem.style.color = "green";
    mensagem.textContent = "Cadastro realizado com sucesso!";

    console.log({
        nome: nome,
        email: email,
        cep: cep.value,
        telefone: telefone.value
    });

    form.reset();
});
