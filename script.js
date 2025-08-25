function gerarSenha() {
    const tamanho = document.getElementById("tamanho").value;
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    if (tamanho < 4) {
        document.getElementById("senha").value = "Insira pelo menos 4 caracteres";
        return; // sai da função antes de gerar a senha
    }

    let senha = "";

    for (let i = 0; i < tamanho; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[randomIndex];
    }

    document.getElementById("senha").value = senha;
}
