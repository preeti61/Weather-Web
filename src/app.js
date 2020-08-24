const path=require('path')
const express=require('express')
const hbs=require('hbs')
const app=express()
const port=process.env.PORT||3000
const getWeather=require('./weather.js')
const getLocation=require('./location.js')
const viewsPath=path.join(__dirname,'../templates/views')//customizing views directory
const PartialsPath=path.join(__dirname,'../templates/partials')
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(PartialsPath)//hbs is required for this ...require hbs
app.use(express.static(path.join(__dirname,'../public')))

app.get('/',(req,res)=>{
    res.render('index',{name:'Preeti',title:'Weather App'})
})
app.get('/help',(req,res)=>{
res.render('help',{name:'Preeti',title:'Help'})
})
app.get('/about',(req,res)=>{
res.render('about',{name:'Preeti',title:'About'})
})
app.get('/weather',(req,res)=>{
    if(!req.query.location)
    return res.send({error:'Please enter a location'})

 
    getLocation(req.query.location,(error,{center}={})=>{
        if(error)
       return res.send({error:error})
        getWeather(error,center[0],center[1],(error,data)=>{
            if(error)
           return res.send({error:'Please enter a valid location'})
           console.log(data);
            res.send({temperature:data.current.temperature,forecast:data.current.weather_descriptions[0],address:data.location.name,wind_speed:data.current.wind_speed,precipitation:data.current.precip})})
    })
    
})
app.get('/products',(req,res)=>{
    if(!req.query.location)
    {return res.send({error:'Please enter a location'})
     }

    console.log(req.query)
   res.send({product:[]})
   
})
app.get('/*',(req,res)=>{
    res.render('404',{msg:"404 Page not Found"})
})

app.listen(port,()=>{
    console.log('Server up at port 3000')
})