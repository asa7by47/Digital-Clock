 const displayTime = () =>{
    let date = new Date;
    let hour = date.getHours();
    let minute =  date.getMinutes();
    let second = date.getSeconds();
    let amPm = ''
    // set AM and PM
    hour < 12 ? amPm = 'AM' : amPm = 'PM'
        // 12 hours clock
    if(hour >12){
        hour -= 12
    }
    // padding 
    let padHour = String(hour).padStart(2,'0');
    let padMin = String(minute).padStart(2,'0');
    let padSecond = String(second).padStart(2,'0');
    // display 
    time.textContent = `${padHour}:${padMin} ${amPm}`;
    // update
    requestAnimationFrame(displayTime);
}
displayTime();