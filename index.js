let isModalOpen = false
let contrastToggle = false

const scaleFactor = 1 / 20
function moveBackground(event){
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor

    for(let i = 0; i < shapes.length; i++){
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1 : 1
        shapes[i].style.transform =`translate(${x *boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast(){
    contrastToggle = !contrastToggle
    if(contrastToggle){
    contrastToggle = true
    document.body.classList += " dark-theme"
    }
    else{
        contrastToggle = false
        document.body.classList.remove("dark-theme")
    }
}
function contact(event){
    event.preventDefault();
const loading = document.querySelector(".modal__overlay--loading")
const success = document.querySelector(".modal__overlay--success")
loading.classList += " modal__overlay--visible"
    emailjs
    .sendForm(
        'service_cvozfq3',
        'template_joubty4',
        event.target,
        'b6MVCth02wMPMpX-L'
    ).then(() =>{
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The Email server is temporarily down, please email me directly at tandicksen@gmail.com"
        )
    })
}


function toggleModal(){
    // isModalOpen = !isModalOpen
    // if(isModalOpen === true){
    // document.body.classList += " modal--open"
    // }
    // else{
    //     document.body.classList.remove("modal--open")
    // }

    if(isModalOpen){
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    document.body.classList += " modal--open"
}


