document.addEventListener("DOMContentLoaded", function(){

    const API_KEY = "0133cc5316757ac730cc46ae342334e4"

    const form = document.querySelector("#form")
    const weatherDetail = document.querySelector(".info")
    const searchHistory = document.querySelector(".historyBtn")
    const consoleDiv = document.querySelector(".console")
    const clearBtn = document.querySelector("#clearHistory")

    function logMessage(message){
        console.log(message)
        if(consoleDiv){
            consoleDiv.innerHTML += `<p>${message}</p>`
            consoleDiv.scrollTop = consoleDiv.scrollHeight
        }
    }

    let cityHistory = JSON.parse(localStorage.getItem("cityHistory")) || []

    function displayHistory(){

        searchHistory.innerHTML = ""

        if(cityHistory.length === 0){
            searchHistory.innerHTML = "<p style='opacity:0.7'>No history yet</p>"
            return
        }

        cityHistory.forEach((cityName)=>{

            const btn = document.createElement("button")
            btn.innerText = cityName

            btn.addEventListener("click", ()=>{
                logMessage("🔁 History button clicked: " + cityName)
                document.querySelector("#city").value = cityName
                form.dispatchEvent(new Event("submit"))
            })

            searchHistory.appendChild(btn)
        })
    }

    clearBtn.addEventListener("click", function(){

        logMessage("🗑 Clearing search history")

        localStorage.removeItem("cityHistory")
        cityHistory = []
        displayHistory()
    })

    form.addEventListener("submit", async function(event){

        logMessage("1️⃣ Submit started (Sync)")
        event.preventDefault()

        const searchCity = document.querySelector("#city").value.trim()

        if(!searchCity){
            logMessage("⚠️ Empty input")
            return
        }

        logMessage("2️⃣ Before fetch() → Sent to Web API")

        try{

            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}`
            )

            logMessage("3️⃣ Fetch resolved")

            const data = await res.json()

            if(data.cod === 200){

                weatherDetail.classList.remove("fade-in")

                weatherDetail.innerHTML = `
                    <p><strong>City:</strong> ${data.name}</p>
                    <p><strong>Temp:</strong> ${(data.main.temp - 273.15).toFixed(1)} °C</p>
                    <p><strong>Weather:</strong> ${data.weather[0].main}</p>
                    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                    <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
                `

                void weatherDetail.offsetWidth
                weatherDetail.classList.add("fade-in")

                logMessage("4️⃣ DOM updated")

        
                cityHistory.push(searchCity)
                cityHistory = [...new Set(cityHistory)]

                localStorage.setItem("cityHistory", JSON.stringify(cityHistory))

                displayHistory()

            } else {
                weatherDetail.innerHTML = `<p>❌ City not found</p>`
                logMessage("❌ Invalid city entered")
            }

        } catch(error){
            weatherDetail.innerHTML = `<p>⚠️ Network Error</p>`
            logMessage("⚠️ Network Error occurred")
        }

        logMessage("5️⃣ Submit function finished")
    })

    displayHistory()
    logMessage("🚀 Page Loaded - Global Execution Context Created")

})
