const menuButton = document.querySelector('.menuButton')
const overlay = document.querySelector('.overlay')
const navigationDrawer = document.querySelector('.navigationDrawer')

let menuToggleButtons = [overlay, menuButton]

menuToggleButtons.forEach(buton => {
    buton.addEventListener('click', () =>
        navigationDrawer.classList.toggle('openDrawer')
    )
})

// const selectBox = document.querySelector('.select-box');
// const selectOption = document.querySelector('.select-option');
// const soValue = document.querySelector('#soValue');
// const optionSearch = document.querySelector('#optionSearch');
// const option = document.querySelector('.option');
// const optionList = document.querySelectorAll('.option li');


// selectOption.addEventListener('click', () => {
//     selectBox.classList.toggle('active');
// });

// optionList.forEach(function (optionListSingle) {
//     optionListSingle.addEventListener('click', function () {
//         text = this.textContent;
//         soValue.value = text;
//         selectBox.classList.remove('active');
//     })
// });





