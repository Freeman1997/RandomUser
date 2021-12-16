const subTitle = document.querySelector('.iconDes .sub')
const title = document.querySelector('.iconDes .main')
const icons = document.querySelectorAll('.icon')
const blueIcons = document.querySelectorAll('.blueIcon')
const image = document.querySelector('.proImage')
const firstIcon = document.getElementById('fIcon')

const makeRequest = async (config) => {
  return await axios(config)
}

const getData = () => {
  makeRequest({
    url: 'https://randomuser.me/api/',
    method: 'get',
    timeout: 5000,
  })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err))
}
let fullName, email, age, address, phone, username

function showOutput(res) {
  image.src = res.data.results[0].picture.large

  const title = res.data.results[0].name.title
  const fName = res.data.results[0].name.first
  const lName = res.data.results[0].name.last
  fullName = `${title} ${fName} ${lName}`

  firstIcon.innerText = fullName
  icons[0].classList.add('hoverIcon')
  blueIcons[0].classList.add('hoverBlueIcon')

  email = res.data.results[0].email
  age = res.data.results[0].dob.age

  let country = res.data.results[0].location.country
  let postcode = res.data.results[0].location.postcode
  address = `${country}-${postcode}`

  phone = res.data.results[0].phone
  username = res.data.results[0].login.username
}
getData()

function eventHandler(paramOne, paramTwo, e) {
  var div = e.target.closest('div')
  var nodes = Array.from(e.target.closest('ul').children)
  let getIndex = 0
  getIndex = nodes.indexOf(div)

  icons.forEach((item) => item.classList.remove('hoverIcon'))
  blueIcons.forEach((item) => item.classList.remove('hoverBlueIcon'))
  subTitle.innerText = paramOne
  title.innerText = paramTwo
  icons[getIndex].classList.add('hoverIcon')
  blueIcons[getIndex].classList.add('hoverBlueIcon')
}

icons[0].addEventListener('mouseenter', (e) => {
  eventHandler('Hi,My name is', fullName, e)
})
icons[1].addEventListener('mouseenter', (e) => {
  eventHandler('My email address is', email, e)
})
icons[2].addEventListener('mouseenter', (e) => {
  eventHandler('My age is', age, e)
})
icons[3].addEventListener('mouseenter', (e) => {
  eventHandler('My address is', address, e)
})
icons[4].addEventListener('mouseenter', (e) => {
  eventHandler('My phone number is', phone, e)
})
icons[5].addEventListener('mouseenter', (e) => {
  eventHandler('My username is', username, e)
})
