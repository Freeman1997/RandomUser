const subTitle = document.querySelector(".iconDes .sub")
const title = document.querySelector(".iconDes .main")
const icons = document.querySelectorAll(".icon")
const image = document.querySelector(".proImage")
const firstIcon = document.getElementById("fIcon")

const makeRequest = async (config)=>{
    return await axios(config)
}

const getData = ()=>{
    makeRequest({
        url:"https://randomuser.me/api/",
        method:"get",       
        timeout:5000
    })
    .then(res => showOutput(res))    
    .catch(err => console.log(err))
}
let fullName,email,age,address,phone,username;

function showOutput(res){
    image.src = res.data.results[0].picture.large;  
    const title = res.data.results[0].name.title;
    const fName = res.data.results[0].name.first;
    const lName = res.data.results[0].name.last;
    fullName = `${title} ${fName} ${lName}` 
    firstIcon.innerText = fullName
    icons[0].classList.add("hoverIcon")  

    email = res.data.results[0].email;
    age = res.data.results[0].dob.age;

    let city = res.data.results[0].location.city
    let country = res.data.results[0].location.country
    let postcode = res.data.results[0].location.postcode
    address = `${country}-${postcode}`

    phone = res.data.results[0].phone;
    username = res.data.results[0].login.username;

}
getData()

function eventHandler(paramOne,paramTwo){  
    icons.forEach(item=> item.classList.remove("hoverIcon"))
    subTitle.innerText = paramOne
    title.innerText = paramTwo
}

icons[0].addEventListener("mouseover",function(){
    eventHandler("Hi,My name is",fullName)
    this.classList.add("hoverIcon")
})
icons[1].addEventListener("mouseover",function(){
    eventHandler("My email address is",email)
    this.classList.add("hoverIcon")
})

icons[2].addEventListener("mouseover",function(){    
    eventHandler("My age is",age)      
    this.classList.add("hoverIcon")    
})
icons[3].addEventListener("mouseover",function(){
    eventHandler("My address is",address) 
    this.classList.add("hoverIcon")    
})
icons[4].addEventListener("mouseover",function(){    
    eventHandler("My phone number is",phone)
    this.classList.add("hoverIcon")
})
icons[5].addEventListener("mouseover",function(){
    eventHandler("My username is",username)      
    this.classList.add("hoverIcon")
})