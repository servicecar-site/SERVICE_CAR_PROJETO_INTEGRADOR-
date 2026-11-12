
function selecionarConta(tipo) {

    if (tipo === "pessoal") {

        document.getElementById("mensagem").innerText =
            "Você selecionou uma conta pessoal!";

        // Aqui você poderá direcionar para o cadastro pessoal
        console.log("Conta pessoal selecionada");

    }

    else if (tipo === "profissional") {

        document.getElementById("mensagem").innerText =
            "Você selecionou uma conta profissional!";

        // Aqui você poderá direcionar para o cadastro profissional
        console.log("Conta profissional selecionada");

    }

}
