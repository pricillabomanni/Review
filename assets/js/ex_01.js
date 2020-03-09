// function valida() {   
//     // verificando se o nome digitado foi maior ou igual a 3 caracteres
//     var nome = document.getElementById("nome").value
//     if (nome.length < 3) {
//         document.getElementById("nome").style.backgroundColor="red"
//     }
//     else{
//         document.getElementById("nome").style.backgroundColor="white"
//     }
// }

// validando nome
document.getElementById("botao").addEventListener('click', function (e) {

    // verificando se o nome digitado foi maior ou igual a 3 caracteres
    var nome = document.getElementById("nome").value

  
    if (nome.length < 3) {
        e.preventDefault()
        // tem erro - preventDefault() vai cancelar a ação de submit - ele previne o acontecimento do evento submit
        
        document.getElementById("nome").style.borderColor = "red"
    }
    else {
        document.getElementById("nome").style.borderColor = "white"
    }

// final da validação nome



// validando email
var email=document.getElementById("email").value


if(email.indexOf("@") == -1 || email.indexOf(".") == -1 || email.length==0){

    e.preventDefault()
    document.getElementById("email").style.borderColor = "red"
}
else{
    document.getElementById("email").style.borderColor = "green"
}
})

// o campo precisa ter um "@", "." e não pode estar vazio
// final da validação email