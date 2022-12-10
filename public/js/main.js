const sendCad = document.querySelector('#btn-send')



// PRevinir o envio Automático dos dados do formulário de cadastro.
const formSend = ()=>{
    sendCad.addEventListener('click',(e)=>{
        e.preventDefault()
    })
}
formSend()