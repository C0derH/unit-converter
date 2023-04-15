const numberInput = document.getElementById("number-input")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl  = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
numberInput.value = 0

convertBtn.addEventListener("click",function(){
    if(numberInput.value){
        const userInput = numberInput.value
        
        const metersToFeet = removeDecimals(userInput * 3.2808399)
        const feetToMeters = removeDecimals(userInput * 0.3048)
        lengthEl.textContent = `${userInput} meters = ${metersToFeet} feet | ${userInput} feet = ${feetToMeters} meters `

        const litersTogallons = removeDecimals(userInput * 0.264172)
        const gallonsToLiters = removeDecimals(userInput *  3.78541178)
        volumeEl.textContent = `${userInput} liters = ${litersTogallons} gallons | ${userInput} gallons = ${gallonsToLiters} liters`
        
        const kilosToPounds = removeDecimals(userInput / 0.45359237)
        const PoundsToKilos = removeDecimals(userInput * 0.45359237)
        massEl.textContent = `${userInput} kilos = ${(kilosToPounds)} pounds | ${userInput} pounds = ${(PoundsToKilos)} kilos`
        
        numberInput.value = ""
    }

})

function removeDecimals(num){
    
    return Math.floor(num * 1000 ) / 1000
}

