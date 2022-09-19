
const navBar = document.getElementById('navBar')
const btnMenu = document.getElementById('btnMenu')
const heroMenu = document.getElementById('heroMenu')
const sections = document.querySelectorAll('section[id]')
const form = document.getElementById('form')

/* Header agregar/quitar fondo */
window.addEventListener('scroll', function () {
  if (window.scrollY >= 60) {
    navBar.classList.add('nav-fixed')
  } else {
    navBar.classList.remove('nav-fixed')
  }
})

/* Menu Navbar */
btnMenu.addEventListener('click', function () {
  heroMenu.classList.toggle('active')
})

heroMenu.addEventListener('click', function (e) {
  if (e.target.matches('.hero__nav-link')) {
    heroMenu.classList.remove('active')
  }
})

/* Secciones con ID */
window.addEventListener('scroll', function (e) {
  const scrollY = window.pageYOffset

  for (const section of sections) {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 58
    const sectionId = section.getAttribute('id')

    const current = document.querySelector('.hero__nav-link[href*=' + sectionId + ']')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      current.classList.add('active')
    } else {
      current.classList.remove('active')
    }
  }
})

/* Formulario */
form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = 'your@email.com'
  const URL_BASE = `https://formsubmit.co/${email}`

  const input = e.currentTarget.elements
  const formData = {
    name: input.name.value,
    email: input.email.value,
    message: input.message.value
  }

  const options = {
    method: 'POST',
    header: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(formData)
  }

  /* con then y catch */
  fetch(URL_BASE, options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

  /* Con async / await */
  try {
    const res = await fetch(URL_BASE, options)
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
})
