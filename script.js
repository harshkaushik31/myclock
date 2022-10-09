theTime = () =>{
    let myTime = new Date();
    let hours = myTime.getHours();
    let minutes = myTime.getMinutes();
    let seconds = myTime.getSeconds();;
    let twhours = hours - 12;
    // if-else of time in 12 hour clock format
    if(hours>12){
        document.getElementById('hours').innerHTML = twhours+':';
        document.getElementById('ampm').innerHTML = '\xa0PM';
    }
    else{
        document.getElementById('hours').innerHTML = hours+':';
        document.getElementById('ampm').innerHTML = '\xa0AM';
    }
    // if-else for adding 0 if hour is less than 10
    if(twhours<10){
        document.getElementById('hours').innerHTML = '0'+twhours+':';
    }
    else{
        document.getElementById('hours').innerHTML = twhours+':';
    }

     // if-else for adding 0 if minutes less than 10
    if(minutes<10){
        document.getElementById('minutes').innerHTML = '0'+minutes+':';
    }
    else{
        document.getElementById('minutes').innerHTML = minutes+':';
    }

    // if-else for adding 0 if seconds less than 10
    if(seconds<10){
        document.getElementById('seconds').innerHTML = '0'+seconds;
    }
    else{
        document.getElementById('seconds').innerHTML = seconds;
    }
    let date = myTime.getDate();
    let month = myTime.getMonth();
    let year = myTime.getFullYear();
    let monthOnePlus = month+1;
    // if-else for adding 0 if date less than 10
    if(date<10){
        document.getElementById('date').innerHTML = '0'+date+'-';
    }
    else{
        document.getElementById('date').innerHTML = date+'-';
    }
    // if-else for adding 0 if month less than 10
    if(monthOnePlus<10){
        document.getElementById('month').innerHTML = '0'+monthOnePlus+'-';
    }
    else{
        document.getElementById('month').innerHTML = monthOnePlus+'-';
    }
    document.getElementById('year').innerHTML = year;
}
setInterval(theTime,1000);


// OR

// theTime = () =>{
//     let myTime = new Date();
//     document.getElementById('hours').innerHTML = myTime.getHours()+':';
//     document.getElementById('minutes').innerHTML = myTime.getMinutes()+':';
//     document.getElementById('seconds').innerHTML = myTime.getSeconds();
//     document.getElementById('date').innerHTML = myTime.getDate()+'-';
//     document.getElementById('month').innerHTML = myTime.getMonth()+'-';
//     document.getElementById('year').innerHTML = myTime.getFullYear();
// }
// setInterval(theTime,1000);
