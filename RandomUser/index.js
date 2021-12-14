const subTitle = document.querySelector(".iconDes .sub")
const title = document.querySelector(".iconDes .main")
const icons = document.querySelectorAll(".icon")
const blueIcons = document.querySelectorAll(".blueIcon")
const image = document.querySelector(".proImage")
const firstIcon = document.getElementById("fIcon")

const makeRequest = async (config) => {
    return await axios(config)
}

const getData = () => {
    makeRequest({
        url: "https://randomuser.me/api/",
        method: "get",
        timeout: 5000
    })
        .then(res => showOutput(res))
        .catch(err => console.log(err))
}
let fullName, email, age, address, phone, username;

function showOutput(res) {

    image.src = res.data.results[0].picture.large;

    const title = res.data.results[0].name.title;
    const fName = res.data.results[0].name.first;
    const lName = res.data.results[0].name.last;
    fullName = `${title} ${fName} ${lName}`

    firstIcon.innerText = fullName
    icons[0].classList.add("hoverIcon")
    blueIcons[0].classList.add("hoverBlueIcon")

    email = res.data.results[0].email;
    age = res.data.results[0].dob.age;

    
    let country = res.data.results[0].location.country
    let postcode = res.data.results[0].location.postcode
    address = `${country}-${postcode}`

    phone = res.data.results[0].phone;
    username = res.data.results[0].login.username;

}
getData()

function eventHandler(paramOne, paramTwo, index) {
    console.log(index);
    icons.forEach(item => item.classList.remove("hoverIcon"))
    blueIcons.forEach(item => item.classList.remove("hoverBlueIcon"))
    subTitle.innerText = paramOne
    title.innerText = paramTwo
    icons[index].classList.add("hoverIcon")
    blueIcons[index].classList.add("hoverBlueIcon")
}


icons[0].addEventListener("mouseenter", () => { eventHandler("Hi,My name is", fullName, 0) })
icons[1].addEventListener("mouseenter", () => { eventHandler("My email address is", email, 1) })
icons[2].addEventListener("mouseenter", () => { eventHandler("My age is", age, 2) })
icons[3].addEventListener("mouseenter", () => { eventHandler("My address is", address, 3) })
icons[4].addEventListener("mouseenter", () => { eventHandler("My phone number is", phone, 4) })
icons[5].addEventListener("mouseenter", () => { eventHandler("My username is", username, 5) })