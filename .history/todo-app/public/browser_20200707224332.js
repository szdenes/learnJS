const { default: Axios } = require("axios")

document.addEventListener('click', (e) => {
  //e.target = the target of the clicked item---if contains the #id
  if (e.target.classList.contains('edit-me')) {
    let userInput = prompt('Enter ur new text:')
//post a = url, 
    axios.post(a,b).then().catch()
  }
})
