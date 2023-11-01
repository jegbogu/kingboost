import { db } from '../../fb.js'
import { auth } from '../../fb.js'
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js'
import { setDoc, doc, getDoc, updateDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js'

const email = document.querySelector('#email')
const amount = document.querySelector('#amount')
const first = document.querySelector('#first-name')
const last = document.querySelector('#last-name')
const phone = document.querySelector('#phone')
const submit = document.querySelector('#submit')

submit.addEventListener('click', async () => {
    let id = JSON.parse(localStorage.tandbuyUser).uid

    let profile = await (await getDoc(doc(db, 'users', id))).data()

    let handler = PaystackPop.setup({
        key: 'pk_test_1ae671af4e66ce5a1ea2d6c4384dfcc5ddf770ab', // Replace with your public key
        email: email.value,
        amount: parseFloat(amount.value),
        ref: '' + Math.floor((Math.random() * 1000000000) + 1),
        onClose: function () {
            alert('Window closed.');
        },
        callback: function (response) {
            (async () => {
                await updateDoc(doc(db, 'users', id), {
                    amountPaid: profile?.amountPaid == undefined ? parseFloat(amount.value) : parseFloat(profile?.amountPaid) + parseFloat(amount.value),
                    transaction: response,
                    timePaid: serverTimestamp()
                })
            })()
        }
    });

    handler.openIframe();
})