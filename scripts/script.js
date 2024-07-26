const $ = document

let launchDate = new Date('Oct 24, 2024 00:00:00').getTime();

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

    
}, 1000)