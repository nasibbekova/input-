let inps = document.querySelectorAll('input')
let form = document.forms.inp
let texts = document.querySelectorAll('.text')
let submitBtn = document.querySelector('button')

form.onsubmit = (event) =>{
    event.preventDefault();
    let isEror = false 

    inps.forEach (inp =>{
        if(inp.value.length === 0 || inp.classList.contains ('invalid')){
            isEror = true
        } 
    })

    if (isEror =  false ){
        submit ()
    } else {
        alert ('Что то не так ')
    }

}

function submit () {
    let userDate  = {}

    let fm = new FormData (form)
    fm.forEach((value, key ) =>{
        userDate[key] = value
    })

    console.log(userDate)
}

let pattern = {
    name:/^[a-z ,.'-]+$/i,
    surname:/^[a-z ,.'-]+$/i,
    email:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    number:/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
    age:/^\S[0-9]{0,3}$/,
    momName:/^[a-z ,.'-]+$/i,
    dadName:/^[a-z ,.'-]+$/i,
    aboutYou:/\w/i,
    js:/\w/i,
    css:/\w/i,
    html:/\w/i
}

let w = 'Please enter your'

// function validation (regex, field) {
//     if(regex.test(field.value)){
//         field.style.borderColor = 'green'
//         field.nextElementSibling.innerHTML = ''
//     } else{
//         field.style.borderColor = 'red'
//         field.nextElementSibling.innerHTML = 'Please enter your email adress'
//         field.nextElementSibling.style.color = 'red'
//     }
// }

function validation (regex, field){
    if(regex.test(field.value)){ 
        field.style.borderColor = 'green'
        field.nextElementSibling.innerHTML = ''
        field.previousElementSibling.style.color = 'green'
        label.nextElementSibling = 'none'
    } else{
        field.style.borderColor = 'red'
        field.nextElementSibling.innerHTML = w + ' ' + field.id 
        field.nextElementSibling.style.color = 'red'
        p.style.color = 'red'
        field.previousElementSibling = 'red'
        label.nextElementSibling = 'block'
    }
}

inps.forEach(inp =>{
    inp.onkeyup = () =>{
        validation(pattern[inp.name],inp)
    }
})


texts.forEach(text =>{
    text.onclick () = function(){
        
    }
})
