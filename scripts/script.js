const $ = document

let launchDate = new Date('Oct 24, 2024 00:00:00').getTime();


let timer = setInterval(() => {
    let nowDate = new Date().getTime()
    let distanceDate = launchDate - nowDate

    
}, 1000)