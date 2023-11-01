import { db } from '../../fb.js';
import { addDoc, collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js';
const box2 = document.querySelector('.box2');


// Add event to submit buton
// submit.addEventListener('click', async () => {
//   let id = JSON.parse(localStorage.tandbuyUser).uid

//   await addDoc(collection(db, 'users', id, 'purchase'), {
//     link: link.value,
//     quality: quality.value,
//     charge: charge.value,
//     user: id
//   })
// });

(async () => {
    let id = JSON.parse(localStorage.tandbuyUser).uid

    let snapshot = await getDocs(collection(db, 'users', id, 'purchase'))

    snapshot.forEach(doc => {
        box2.innerHTML += `
    <div class="no">
                        <div class="order">${doc?.data().order}</div>
                        <div class="link">${doc?.data()?.link}</div>
                        <div class="amount">${doc?.data()?.charge}</div>
                        <div class="quantity">${doc?.data()?.quality}</div>
                    </div>
    `
    })
})()
