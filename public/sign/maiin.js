import { db } from '../../fb.js'
import { auth } from '../../fb.js'
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js'
import { setDoc, doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js'

const userName = document.querySelector('#username')
const email = document.querySelector('#email')
const number = document.querySelector('#phone')
const pass = document.querySelector('#password')
const submit = document.querySelector('.submit')

submit.addEventListener('click', () => {
    createUserWithEmailAndPassword(auth, email.value, pass.value)
        .then(async user => {
            await setDoc(doc(db, "users", user.user.uid), {
                name: userName.value,
                email: email.value,
                phone: number.value,
                id: user.user.uid
            });

            localStorage.tandbuyUser = JSON.stringify(user.user)
            location.replace('/public/tan/index.html')
        })
        .catch(error => {
            console.log(error)
        })
});

(async () => {
    const id = JSON.parse(localStorage.tandbuyUser).uid

    let profile = await (await getDoc(doc(db, 'users', id))).data()

    console.log(profile)
})()