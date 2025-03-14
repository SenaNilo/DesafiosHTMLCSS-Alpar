const apiKey = "afe23f7765b55a3c9ed7d1881a610b7d"
const lang = "pt_br"
const units = "metric"

const cardEl = document.querySelector(".card")
const iconEl = document.querySelector(".icon")
const tempEl = document.querySelector("h2 span")
const fellslikeEl = document.querySelector(".fells-like span")
const tempMinEl = document.querySelector(".min")
const tempMaxEl = document.querySelector(".max")
const humidityEl = document.querySelector(".humidity span")
const windImgEl = document.querySelector(".wind img")
const windTextEl = document.querySelector(".wind span")
const inputEl = document.querySelector(".input input")
const btnEl = document.querySelector(".input button")


//Método assincrono
async function callApi() {
    const city = inputEl.value || "sao paulo"
    
    try{
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`)

        const data = await response.json()
    
        const icon = data.weather[0].icon
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
        iconEl.src = iconUrl

        tempEl.innerHTML = Math.round(data.main.temp)
        fellslikeEl.innerHTML = Math.round(data.main.feels_like)
        tempMinEl.innerHTML = Math.round(data.main.temp_min)
        tempMaxEl.innerHTML = Math.round(data.main.temp_max)
        humidityEl.innerHTML = data.main.humidity
        windTextEl.innerHTML = data.wind.speed.toLocaleString()

        windImgEl.style.transform = `rotate(calc(${data.wind.deg}deg - 90deg))`
        cardEl.classList.add("active")
    }catch(error){
        console.log(error)
        cardEl.classList.remove("active")

    }
}
// function callApi() {
//     const city = inputEl.value || "sao paulo"


//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`)
//     .then(response => response.json())
//     .then(response => {
//         try{
//             const icon = response.weather[0].icon
//             const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
//             iconEl.src = iconUrl

//             tempEl.innerHTML = Math.round(response.main.temp)
//             fellslikeEl.innerHTML = Math.round(response.main.feels_like)
//             tempMinEl.innerHTML = Math.round(response.main.temp_min)
//             tempMaxEl.innerHTML = Math.round(response.main.temp_max)
//             humidityEl.innerHTML = response.main.humidity
//             windTextEl.innerHTML = response.wind.speed.toLocaleString()

//             windImgEl.style.transform = `rotate(calc(${response.wind.deg}deg - 90deg))`
//             cardEl.classList.add("active")
//         }catch(error){
//             console.log(error)
//             cardEl.classList.remove("active")

//         }
//     }).catch(err => {
//         console.log(err)
//         cardEl.classList.remove("active")
//     })
// }

btnEl.addEventListener('click', callApi)
callApi()