const sendCad = document.querySelector('#btn-send')
const spanTip = document.querySelector('.span-tip')


// PRevinir o envio Automático dos dados do formulário de cadastro.
const formSend = ()=>{
    sendCad.addEventListener('click',(e)=>{
        e.preventDefault()
       
        setTimeout(function(){
            spanTip.style.display = 'block'
            spanTip.animate([
                { transform: 'translateX(0px)'},
                { transform: 'translateX(100px)'},
                { transform: 'translateX(99px)'},
                { transform: 'translateX(0px)'},
            ],{
                duration: 3700,
                iterations: 1,
                easing: 'ease-in-out'
            }
            )
        },1000)
        
        setTimeout(function(){
            spanTip.style.display = 'none'
        },4000)
    })
}
formSend()