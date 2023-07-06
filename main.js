"use strict";

// function getValues() {
//     const user     = getElementById("user");
//     const password = getElementById("password");
//     const checkbox = getElementById("remember");
//     return
// }

class Informations {
    constructor() {
        this.user = getElementById("user");
        this.password = getElementById("password");
        this.checkbox = getElementById("remember");
    }
    checarTipoUsuario () {
        if (this.user.includes('@')) {
            return "E-mail: ";
        } else {
            return "Nome de Usuário: "
        }
    }

    alerta () {
        let mensagem = `${this.checarTipoUsuario()}${this.user}\nSenha: ${this.password}\n${this.checkbox}`
    }

}

