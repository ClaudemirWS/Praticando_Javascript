$("#frmRegistro").validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        senha: {
            required: true,
            minlength: 6,
            maxlength: 12
        }
    },
    messages: {
        nome: {
            required: "campo nome é obrigatório",
        },
        email: {
            required: "campo e-mail é obrigatório",
            email: "O e-mail deve estar no formato: xxx@xxxx.xxx"
        },
        senha: {
            required: "campo senha é obrigatório",
            minlength: "A senha deve ter ao menos 6 caracteres",
            maxlength: "A senha deve ter no máximo 12 caracteres",
        },
    }
});