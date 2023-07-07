"use strict";

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

        if (this.user.value.includes('@')) {
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
            
            const usuario = this.user.value;
            const senha = this.password.value;
            const lembrar = this.checkbox.checked;

            let mensagem = `${this.checarTipoUsuario()}${usuario}\nSenha: ${senha}\nLembrar de mim: ${lembrar}`;
            
            // Exibição da mensagem de sucesso e omissão da de erro:
            if (Array.from(this.sucesso.classList).includes("hidden")) {
                this.sucesso.classList.remove("hidden");
            }
            if (!Array.from(this.falha.classList).includes("hidden")) {
                this.falha.classlist.addClass("hidden");
            }
            alert(mensagem);
        } else {
            
            // Exibição da mensagem de erro e omissão da de sucesso:
            if (!Array.from(this.sucesso.classList).includes("hidden")) {
                console.log("rodou 1");
                this.sucesso.classList.remove("hidden");
            }
            if (Array.from(this.falha.classList).includes("hidden")) {
                console.log("rodou 2");
                this.falha.classlist.addClass("hidden");
            }
        }

        // Atualização dos estados dos botões:
        this.sucesso  = document.getElementById("sucesso");
        this.falha    = document.getElementById("falha");
        this.checkbox = document.getElementById("checkbox");

    }
}

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const informacoes = new Informations();
    informacoes.alerta();

});
