//validação usuário
function onChangeEmail(){
    habilitaBotoes();
    errosEmail();
}
//validação senha
function onChangeSenha(){
    habilitaBotoes();
    errosSenha();
}

//puxa elementos dos HTML
const form = {
    //elementos e-mail:
    email:() => document.getElementById('email'),
    emailInvalido: () => document.getElementById('emailInvalido'),
    emailObrigatorio: () => document.getElementById('emailObrigatorio'),
    //elementos senha
    password: () => document.getElementById('password'),
    passwordObrigatorio: () => document.getElementById('senhaObrigatoria'),
    //elementos botões
    recuperarSenha: () => document.getElementById('recuperarSenha'),
    entrar: () => document.getElementById('btnEntrar')
}

function emailEhValido(){
    const email = form.email().value;
    if(!email){
        return false;
    }
    return validaEmail(email);
}

function senhaEhValida(){
    const senha = form.password().value;
    if(!senha){
        return false;
    }
    return true;
}

//verifica atraves de REGEX formatação do email (ex teste@teste.com)
function validaEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}

//se campo email estiver vazio notifica erro, se email não seguir a formatação correta notifica erro
function errosEmail(){
    const email = form.email().value;
    if(!email){
        form.emailObrigatorio().style.display="block";
    }else{
        form.emailObrigatorio().style.display="none";
    }
    if(validaEmail(email)){
        form.emailInvalido().style.display="none";
    }else{
        form.emailInvalido().style.display="block";
    }
}

//se campo senha estiver vazio notifica erro
function errosSenha(){
    const password = form.password().value;
    if(!password){
        form.passwordObrigatorio().style.display="block";
    }else{
        form.passwordObrigatorio().style.display="none";
    }
}

//só habilita botões após verificar validade de email e senha
function habilitaBotoes(){
    const emailValido = emailEhValido();
    form.recuperarSenha().disabled = !emailValido;

    const senhaValida = senhaEhValida();
    form.entrar().disabled = !emailValido || !senhaValida;
}

//função onclick que leva para home logada após clicar em entrar
function logar(){
    var email = form.email().value;
    var senha = form.password().value;

    if(email == 'email@email.com' && senha =="senha"){
        location.href= "home-logada.html";
    }else{
        alert("Usuário ou senha incorretos!")
    }
}





