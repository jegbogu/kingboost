const dropdownSelect = document.querySelector('.dropdown-select');
const dropdownOptions = document.querySelector('.dropdown-options');
const searchInput = document.querySelector('.search-input');
const optionItems = document.querySelectorAll('.option-item');



searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  optionItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});
