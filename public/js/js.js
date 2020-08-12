const msg1=document.getElementById('msg1')
const msg2=document.getElementById('msg2')
document.getElementById('but').addEventListener("click",(e)=>{
const address=document.getElementById('loc').value;
console.log(address)
fetch(`http://localhost:3000/weather?location=${address}`).
then((response)=>(response.json()).then((data)=>{
    if(data.error)
   showError(data.error);
    else
    {
   showWeather(data);}

}));
e.preventDefault();})

showError=(error)=>
{
    msg1.innerHTML=`<alert class='alert alert-danger'>${error}</alert>`
    setTimeout(()=>{
        msg1.innerHTML=" ";
    },1000)
}

showWeather=({address,precipitation,temperature,wind_speed,forecast})=>
{
msg1.innerHTML=`<h5>The location is ${address}.The temperature is ${temperature} degree Celsius.It will be ${forecast}</h5>.`;
msg2.innerHTML=`<h5>The wind speed is ${wind_speed} km/h.The probability of precipitation is ${precipitation}.</h5>`;
}