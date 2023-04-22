
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passowordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault()

    // Verifica se o nome está preenchido
    if (nameInput.value === "") {
        alert("Preencha o campo nome");
        return;
    }

    // Verifica se o email está vazio e se é válido
    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Preencha o campo email");
        return;
    }

    // Verifica se a senha está preenchida
//    if (passowordInput.value === "") {
//        alert("Preencha o campo senha");
//        return;
//    }

    // Verifica se a senha tem 8 dígitos
    if (!validaPassword(passowordInput.value, 8)) {
        alert("A senha precisa ter no minimo 8 dígitos.");
        return;
    }

    // Verifica se a situação de trabalho foi selecionada  
    if (jobSelect.value === "") {
        alert("Preencha o campo situação de trabalho");
        return;
    }

    // Verifica se a situação de trabalho foi selecionada  
    if (messageTextarea.value === "") {
        alert("Preencha o campo mensagem");
        return;
    }
    
    

    // Se os campos estiverem todos corretamente preenchidos envia o formulário
    form.submit();


    // Função que valida o email
    function isEmailValid(email) {

    //cria uma regex para validar o email
        const emailRegex = new RegExp(
          //compara o formato usuario12@host.com.br
              /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        );
       
       if (emailRegex.test(email)) {
        return true;
       }


    }

    // Função que valida a senha
    function validaPassword(passoword, minDigits) {
        if (passoword.length >= minDigits)
            //Senha valida
            return true;
        }
            return false;

});
