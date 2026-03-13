function login(){

    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

firebase.auth().signInWithEmailAndPassword(email, senha)

.then( () => {
    alert("Login realizado!")
})

.catch(() => {
    alert("Erro no login!")
})
}


function salvarTexto(){

    let texto = document.getElementById("texto").value

    firebase.firestore().collection("conteudo").doc("sobre")
}

