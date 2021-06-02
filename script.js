document.getElementById('change-image').addEventListener('click', image)
document.getElementById('change-text').addEventListener('click', text)
document.getElementById('background').addEventListener('click', background)
document.getElementById('hide').addEventListener('click', hide)
document.getElementById('show').addEventListener('click', show)

function image () {
  document.getElementById('image').src = "./images/steam.jpg"
}

function text () {
  document.getElementById('text').innerHTML = "WOW!"
}

function background () {
  document.body.style.backgroundColor = "purple"
}

function hide () {
  document.getElementById('text').style.display = "none"
}

function show () {
  document.getElementById('text').style.display = "block"
}
