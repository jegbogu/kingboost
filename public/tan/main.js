import { db } from '../../fb.js';
import { addDoc, collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js'
const box2 = document.querySelector('.box2')


const submit = document.querySelector('#submit');
const order = document.querySelector('#order');
const link = document.querySelector('#link');
const quality = document.querySelector('#quality');
const charge = document.querySelector('#charge');

// Add event to submit buton
submit.addEventListener('click', async () => {
  let id = JSON.parse(localStorage.tandbuyUser).uid

  await addDoc(collection(db, 'users', id, 'purchase'), {
    link: link.value,
    quality: quality.value,
    charge: charge.value,
    order: order.value,
    user: id
  })
});
