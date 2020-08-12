const request =require('request')
const getWeather=(error,longitude,latitude,callback)=>
{
    
  
const url =`http://api.weatherstack.com/current?access_key=10a5b2a53891c1b796de77e1872a4f89&query=${latitude},${longitude}`

request({url:url,json:true},(error,response)=>{
    if(error)
    callback('Please check your internet connection',undefined)
    if(response.body.error)
     callback('Please enter a valid location',undefined)
     else
     {console.log(response.body);
    callback(undefined,response.body)}
    
    })}
    
module.exports=getWeather