const $ = document

let launchDate = new Date('Jul 7, 2025 00:00:00').getTime();

let daysElem = $.querySelector('.days')
let hoursElem = $.querySelector('.hours')
let minutesElem = $.querySelector('.minutes')
let secondsElem = $.querySelector('.seconds')

let timer = setInterval(() => {
    let nowDate = new Date().getTime()
    let distanceDate = launchDate - nowDate

    let distanceDays = Math.floor(distanceDate / (1000 * 60 * 60 * 24))
    let distanceHours = Math.floor((distanceDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let distanceMinutes = Math.floor((distanceDate % (1000 * 60 * 60 )) / (1000 * 60 ))
    let distanceSeconds = Math.floor((distanceDate % (1000 * 60)) / 1000)

    daysElem.innerHTML = distanceDays < 10 ? '0' + distanceDays : distanceDays 
    hoursElem.innerHTML = distanceHours < 10 ? '0' + distanceHours : distanceHours
    minutesElem.innerHTML = distanceMinutes < 10 ? '0' + distanceMinutes : distanceMinutes
    secondsElem.innerHTML = distanceSeconds < 10 ? '0' + distanceSeconds : distanceSeconds

    if(distanceDate < 0){
        clearInterval(timer)
        daysElem.innerHTML = '00'
        hoursElem.innerHTML = '00'
        minutesElem.innerHTML = '00'
        secondsElem.innerHTML = '00'
    }
}, 1000)