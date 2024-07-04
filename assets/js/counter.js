//Coutndown
const coutndown = () => {
    const countDate = new Date('November 21, 2024 10:00:00').getTime(); // That's my birthday ;) 
    const now = new Date().getTime();
    const gap = countDate - now;
//stop timer at 0:
    if (gap<0) { gap = 0;}
  
    //How does time work?
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    //Calculate
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour)/minute);
    const textSecond = Math.floor((gap % minute)/second);
    
    //
    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;
  
  };
  setInterval(coutndown, 1000);