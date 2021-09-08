//VARIABLES
const toggleBtn = document.querySelector("#toggleBtn")
const nav = document.querySelector('.nav')
const jumbotron = document.querySelector(".jumbotron")
const connectSpan = document.querySelector("#connect")
const footer = document.querySelector("#footer")
const main = document.querySelector("#top")
const logo = document.querySelector(".logo")
const formBtn = document.querySelector("#formBtn")
const resultContainer =  document.querySelector(".result")
let resultTitle = document.querySelector("#result__title")
let resultImage = document.querySelector("#result__image")
let resultName = document.querySelector("#result__name")
let resultLocation = document.querySelector("#result__location")
let username = document.querySelector("#username")


//FUNCTIONS
const toggleFunction = () => {
    //Changing to darkmode
    if(toggleBtn.classList.contains("fa-moon")){
        toggleBtn.classList.remove("fa-moon")
        toggleBtn.classList.add("fa-sun")
        toggleBtn.style.backgroundColor = "#f2f0f1"
        toggleBtn.style.padding = "5px"
        toggleBtn.style.borderRadius= "50%"

        nav.style.backgroundColor = "#726A95"
        nav.children[0].style.color = "#f2f0f1"
        jumbotron.style.backgroundColor = "#261C2C"
        jumbotron.style.color = "#f2f0f1"

        main.style.backgroundColor = "#726A95"
        footer.style.backgroundColor = "#261C2C"
        footer.children[1].style.color = "#FAF1E6"
        footer.children[2].style.color = "#FAF1E6"
        footer.children[0].style.color = "#FAF1E6"

    }else {
        //Back to light node
        toggleBtn.classList.remove("fa-sun")
        toggleBtn.classList.add("fa-moon")
        nav.style.backgroundColor = "#FDF6F0"
        nav.children[0].style.color = "#0F044C"
        main.style.backgroundColor = "transparent"
        footer.children[0].style.color ="#0F044C"
        jumbotron.style.backgroundColor = "#FDF6F0"
        jumbotron.style.color = "#0F044C"
        footer.style.backgroundColor = "#FAF1E6"
        footer.children[1].style.color = "#000"
        footer.children[2].style.color = "#000"
    }
}

const retrieveData = (e) => {
    e.preventDefault()
    if(username.value === " ") return 
    try {
        fetch(`https://api.github.com/users/${username.value}`)
        .then(res => res.json())
        .then(data => {
            resultContainer.style.display = "flex"
            resultContainer.style.width = "100%"
            resultContainer.style.flexDirection = "column"
            resultContainer.style.padding = "30px"
            resultContainer.style.justifyContent = "center"
            resultContainer.style.alignItems = "center"
            resultTitle.textContent = data.bio
            resultName.textContent = data.name
            resultLocation.textContent = data.location
            resultImage.src = data.avatar_url
            resultImage.alt = data.name
            resultImage.title = data.name
            username.value = ""
        })

    } catch (error) {
        console.log("Unable to validate details");
        console.error(error);
        resultTitle.textContent = "Unable to validate the input"
        resultTitle.textContent = "Kindly check the username or try another"
    }

}
//HANDLERS
toggleBtn.addEventListener('click', toggleFunction)
formBtn.addEventListener('click', retrieveData)
const toggleCustom = () => customField.classList.toggle("nodisplay")