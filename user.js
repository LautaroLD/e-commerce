const user = [{
    name: 'pepito',
    lastName: 'perez',
    email: 'pepito@gmail.com',
    password: 'pepezon'
}]
const btn = document.getElementById('btn-login')
const email = document.getElementById('loginEmail')
const password = document.getElementById('loginPassword')
const login__container = document.getElementById('login__container')
// btn.addEventListener('click', confirm_user())
let errormsj = document.createElement('P')
let text = document.createTextNode('datos incorrectos')
errormsj.appendChild(text)
function confirm_user() {
    user.map((date) => {
        if (date.email == email.value && date.password == password.value) {
            // console.log(email.value, password.value)
            // btn.setAttribute('href', 'boton')
            btn.href = "../index.html"
        } else {
            login__container.insertBefore(errormsj, login__container.childNodes[2])
            setTimeout(() => {
                errormsj.remove()
            }, 1500);
        }
    })

}
//
        // btn.addEventListener('click', () => {
        //     btn.setAttribute('href', '../index.html');
        // })
    // })
// }
