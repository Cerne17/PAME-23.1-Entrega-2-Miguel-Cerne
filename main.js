"use strict";

// function getValues() {
//     const user     = getElementById("user");
//     const password = getElementById("password");
//     const checkbox = getElementById("remember");
//     return
// }

class Informations {
    constructor() {
        this.user     = document.getElementById("user");
        this.password = document.getElementById("password");
        this.checkbox = document.getElementById("remember");
        this.sucesso  = document.getElementById("sucesso");
        this.falha    = document.getElementById("falha");
    }
    checarTipoUsuario () {

        // Checa se o usuário inseriu um email ou um usuário, para formatar a mensagem de alerta

        if (this.user.includes('@')) {
            return "E-mail: ";
        } else {
            return "Nome de Usuário: "
        }
    }
    validacaoForm () {

        // Checa se todos campos com 'required' foram devidamente preenchidos

        let inputsNecessarios = document.querySelectorAll("#formulario input[required]");
        let validacao = true;

        for (let i = 0; i < inputsNecessarios.length; i++) {
            if (!inputsNecessarios[i].validity.valid) {
                validacao = false;
                break;
            }
        }
        return validacao;
    }

    alerta () {

        if (this.validacaoForm()) {
            let mensagem = `${this.checarTipoUsuario()}${this.user}\nSenha: ${this.password}\nLembrar de mim: ${this.checkbox}`;
            alert(mensagem);

            // Exibição da mensagem de sucesso e omissão da de erro:

            if (Array.from(this.sucesso.classList).includes("hidden")) {
                this.sucesso.classList.remove("hidden");
            }
            if (!Array.from(this.falha.classList).includes("hidden")) {
                this.falha.classlist.addClass("hidden");
            }
        } else {
            
            // Exibição da mensagem de erro e omissão da de sucesso:

            if (!Array.from(this.sucesso.classList).includes("hidden")) {
                this.sucesso.classList.remove("hidden");
            }
            if (Array.from(this.falha.classList).includes("hidden")) {
                this.falha.classlist.addClass("hidden");
            }
        }

        // Atualização dos estados dos botões:
        this.sucesso = document.getElementById("sucesso");
        this.falha   = document.getElementById("falha");

    }
}

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita falsas ativações do botão
    const informacoes = new Informations();
    informacoes.alerta();
});
