const container = document.querySelector('.container')
const clickMe = document.querySelector('.clickMe')

let count = 16

clickMe.addEventListener('click', () => {
  container.innerHTML = ''
  count = parseInt(prompt('enter your number'))
  if (isNaN(count) || count < 0 || count >= 100) {
    alert('please enter valid number (0-99)')
    return
  }
  container.childNodes.forEach(ele => ele.classList.remove('pixelated'))

  for (let i = 0; i < count * count; i++) {
    const grid = document.createElement('div')
    grid.setAttribute('class', 'grid')
    grid.style.width = (960 / count) + 'px'
    grid.style.height = (960 / count) + "px"
    grid.addEventListener('mouseleave', e => e.target.classList.toggle('pixelated'))
    container.appendChild(grid)
  }

})




