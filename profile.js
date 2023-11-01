import { db } from '../fb.js'
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js'
import { doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js'

const walletBalance = document.querySelector('.walletBalance');

(async () => {
    const id = JSON.parse(localStorage.tandbuyUser).uid

    let profile = await (await getDoc(doc(db, 'users', id))).data()

    walletBalance.innerText = profile?.amountPaid.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})()