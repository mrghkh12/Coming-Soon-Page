const $ = document

let launchDate = new Date('Oct 24, 2024 00:00:00').getTime();


let timer = setInterval(() => {
    let nowDate = new Date().getTime()
    let distanceDate = launchDate - nowDate

    let distanceDays = Math.floor(distanceDate / (1000 * 60 * 60 * 24))
    let distanceHours = Math.floor((distanceDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let distanceMinutes = Math.floor((distanceDate % (1000 * 60 * 60 )) / (1000 * 60 ))
    let distanceSeconds = Math.floor((distanceDate % (1000 * 60)) / 1000)


    console.log(distanceDays,distanceHours,distanceMinutes,distanceSeconds);
}, 1000)