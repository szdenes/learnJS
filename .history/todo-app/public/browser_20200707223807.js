document.addEventListener('click', (e) => {
  //e.target = the target of the clicked item---if contains the #id
  if (e.target.classList.contains('edit-me')) {
    let user  prompt('Enter ur new text:')
  }
})
