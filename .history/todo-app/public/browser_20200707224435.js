const { default: Axios } = require("axios")

document.addEventListener('click', (e) => {
  //e.target = the target of the clicked item---if contains the #id
  if (e.target.classList.contains('edit-me')) {
    let userInput = prompt('Enter ur new text:')
//post a = url, post b = data it's going to be sent to the url --will return a promise --for not know
    axios.post(a,b).then().catch()
  }
})
