let inps = document.querySelectorAll('input')

let pattern = {
    name:/^[a-z ,.'-]+$/i,
    surname:/^[a-z ,.'-]+$/i,
    email:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    number:/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
    age:/^\S[0-9]{0,3}$/
}

function validation (regex, field) {
    if(regex.test(field.value)){
        field.style.borderColor = 'green'
        field.nextElementSibling.innerHTML = ''
    } else{
        field.style.borderColor = 'red'
        field.nextElementSibling.innerHTML = 'Please enter your email adress'
        field.nextElementSibling.style.color = 'red'
    }
}

inps.forEach(inp =>{
    inp.onkeyup = () =>{
        validation(pattern[inp.name],inp)
    }
})

