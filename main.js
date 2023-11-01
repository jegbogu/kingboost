import { auth } from '../fb.js'
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js'

const email = document.querySelector('#emailInput')
const pass = document.querySelector('#password')

const submit = document.querySelector('#cra')

submit.addEventListener('click', () => {
    signInWithEmailAndPassword(auth, email.value, pass.value)
        .then(async user => {
            localStorage.tandbuyUser = JSON.stringify(user.user)

            location.replace('/public/tan/index.html')
        })
        .catch(error => {
            console.log(error)
        })
});

