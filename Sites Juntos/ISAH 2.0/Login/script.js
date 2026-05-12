let email_banco = 'rafaeltosellimell@gmail.com'
let senha_banco = '1234'

const email = document.querySelector('#email')
const senha = document.querySelector('#senha')


const site = document.querySelector('#botao')


site.addEventListener('click', ()=>{

switch (true) {

        case (email.value !== email_banco && senha.value !== senha_banco):
            alert('Email e senha errados');
            break;

        case (email.value !== email_banco):
            alert('Email não encontrado');
            break;

        case (senha.value !== senha_banco):
            alert('Senha errada');
            break;

        default:

        document.body.classList.add('sumir')

            setTimeout(() => {
               window.location.href = "../Principal/index.html"; 
            }, 1000);
            
            break;
    }

})

