


var date;
var hour; 
var minutes;
var seconds;
var hourR;
var minutesR;
var secondsR;



setInterval(() => {
    // alert(1);   
    date= new Date();
    hour=date.getHours();
    minutes=date.getMinutes();
    seconds=date.getSeconds();
     hourR=30*hour+minutes/2;
     minutesR=6*minutes;
     secondsR=6*seconds;
    //  alert(`${hour}/${minutes}/${seconds}`);
    
    document.getElementById("hour").style.transform=`rotate(${hourR}deg)`;
    document.getElementById("minute").style.transform=`rotate(${minutesR}deg)`;
    document.getElementById("second").style.transform=`rotate(${secondsR}deg)`;
    
       
}, 1000);
