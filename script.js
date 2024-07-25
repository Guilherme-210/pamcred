function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // Pega a teg img
  const img = document.querySelector('#profile img')

  //Troca de imagem do avatar
  if (html.classList.contains('light')) { // Light mode
    img.setAttribute('src', './assets/Avatar.png')
  } else { // normal
    img.setAttribute('src', './assets/Avatar.png')
  }
}
