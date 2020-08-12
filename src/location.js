
const request =require('request')
const getLocation=(location,callback)=>{
    const url=`https://api.mapbox.com/geocoding/v5/mapbox.places/encodeURIComponent(${location}).json?access_token=pk.eyJ1IjoicHJlZXRpMTI1IiwiYSI6ImNrY3JiaTJidDBidXQycmx3MHl5enRrNDMifQ.QPXdFjGIZUDFxL4lsNEYKw`
request({url:url,json:true},(error,response)=>
{
    if(error)
    callback('Please check your internet connection',undefined)
    if(response.body.features.length===0)
     callback('Please enter a valid location',undefined)
    else
   callback(undefined,response.body.features[0])


})

}

module.exports=getLocation