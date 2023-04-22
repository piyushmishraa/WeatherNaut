const express= require("express");
  const app= express();
  const bodyparser= require('body-parser');
  const https = require('https');

  app.use(bodyparser.urlencoded({extended:true}));
  app.use(express.static(__dirname));


  app.get('/',function(req,res){
  res.sendFile(__dirname+"/index.html");
  })

  app.post('/',function(req,res){
   const url=`https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&appid=75786ad39dbd9e7368394a05491feaba&units=metric`;
   https.get(url,function(response){
    console.log( response.statusCode);
    response.on("data",function(data){
        const weatherData=JSON.parse(data);
        const TEMP=weatherData.main.temp;
        const FEELS= weatherData.main.feels_like;
        const DESCRIPTION=weatherData.weather[0].description;
        const SUNRISE=weatherData.sys.sunrise;
        const SUNSET=weatherData.sys.sunset;
        const TEMPMIN=weatherData.main.temp_min;
        const  TEMPMAX=weatherData.main.temp_max;
        console.log(weatherData);

        res.write(`<!DOCTYPE html>
        <html>
        <head>
        <link rel="stylesheet" href="public/styles.css" />
        </head>
        
        <body>
        
          <!-- 1st card -->
            
            <div class="container noselect">
                <div class="canvas">
                  <div class="tracker tr-1"></div>
                  <div class="tracker tr-2"></div>
                  <div class="tracker tr-3"></div>
                  <div class="tracker tr-4"></div>
                  <div class="tracker tr-5"></div>
                  <div class="tracker tr-6"></div>
                  <div class="tracker tr-7"></div>
                  <div class="tracker tr-8"></div>
                  <div class="tracker tr-9"></div>
                  <div class="tracker tr-10"></div>
                  <div class="tracker tr-11"></div>
                  <div class="tracker tr-12"></div>
                  <div class="tracker tr-13"></div>
                  <div class="tracker tr-14"></div>
                  <div class="tracker tr-15"></div>
                  <div class="tracker tr-16"></div>
                  <div class="tracker tr-17"></div>
                  <div class="tracker tr-18"></div>
                  <div class="tracker tr-19"></div>
                  <div class="tracker tr-20"></div>
                  <div class="tracker tr-21"></div>
                  <div class="tracker tr-22"></div>
                  <div class="tracker tr-23"></div>
                  <div class="tracker tr-24"></div>
                  <div class="tracker tr-25"></div>
                  <div id="card">
                  <p id="prompt">TEMPERATURE</p>
                    <div class="title TEMP1" >${TEMP}</div>
                    
                  </div>
                </div>
              </div>
            <!-- 2nd card-->
        
              <div class="container2 noselect">
                <div class="canvas">
                  <div class="tracker tr-1"></div>
                  <div class="tracker tr-2"></div>
                  <div class="tracker tr-3"></div>
                  <div class="tracker tr-4"></div>
                  <div class="tracker tr-5"></div>
                  <div class="tracker tr-6"></div>
                  <div class="tracker tr-7"></div>
                  <div class="tracker tr-8"></div>
                  <div class="tracker tr-9"></div>
                  <div class="tracker tr-10"></div>
                  <div class="tracker tr-11"></div>
                  <div class="tracker tr-12"></div>
                  <div class="tracker tr-13"></div>
                  <div class="tracker tr-14"></div>
                  <div class="tracker tr-15"></div>
                  <div class="tracker tr-16"></div>
                  <div class="tracker tr-17"></div>
                  <div class="tracker tr-18"></div>
                  <div class="tracker tr-19"></div>
                  <div class="tracker tr-20"></div>
                  <div class="tracker tr-21"></div>
                  <div class="tracker tr-22"></div>
                  <div class="tracker tr-23"></div>
                  <div class="tracker tr-24"></div>
                  <div class="tracker tr-25"></div>
                  <div id="card2">
                  <p id="prompt2" style="text-align: center;"> FEELS LIKE </p>
                    <div class="title FEELS">${FEELS}</div>
                    
                  </div>
                </div>
              </div>
        
              <!-- 3rd card-->
              <div class="container3 noselect">
                <div class="canvas">
                  <div class="tracker tr-1"></div>
                  <div class="tracker tr-2"></div>
                  <div class="tracker tr-3"></div>
                  <div class="tracker tr-4"></div>
                  <div class="tracker tr-5"></div>
                  <div class="tracker tr-6"></div>
                  <div class="tracker tr-7"></div>
                  <div class="tracker tr-8"></div>
                  <div class="tracker tr-9"></div>
                  <div class="tracker tr-10"></div>
                  <div class="tracker tr-11"></div>
                  <div class="tracker tr-12"></div>
                  <div class="tracker tr-13"></div>
                  <div class="tracker tr-14"></div>
                  <div class="tracker tr-15"></div>
                  <div class="tracker tr-16"></div>
                  <div class="tracker tr-17"></div>
                  <div class="tracker tr-18"></div>
                  <div class="tracker tr-19"></div>
                  <div class="tracker tr-20"></div>
                  <div class="tracker tr-21"></div>
                  <div class="tracker tr-22"></div>
                  <div class="tracker tr-23"></div>
                  <div class="tracker tr-24"></div>
                  <div class="tracker tr-25"></div>
                  <div id="card3">
                  <p id="prompt3">DESCRIPTION </p>
        
                    <div class="title DESCRIPTION">${ DESCRIPTION}</div>
                    
                  </div>
                </div>
              </div>
        
              <!-- 4th card-->
              <div class="container4 noselect">
                <div class="canvas">
                  <div class="tracker tr-1"></div>
                  <div class="tracker tr-2"></div>
                  <div class="tracker tr-3"></div>
                  <div class="tracker tr-4"></div>
                  <div class="tracker tr-5"></div>
                  <div class="tracker tr-6"></div>
                  <div class="tracker tr-7"></div>
                  <div class="tracker tr-8"></div>
                  <div class="tracker tr-9"></div>
                  <div class="tracker tr-10"></div>
                  <div class="tracker tr-11"></div>
                  <div class="tracker tr-12"></div>
                  <div class="tracker tr-13"></div>
                  <div class="tracker tr-14"></div>
                  <div class="tracker tr-15"></div>
                  <div class="tracker tr-16"></div>
                  <div class="tracker tr-17"></div>
                  <div class="tracker tr-18"></div>
                  <div class="tracker tr-19"></div>
                  <div class="tracker tr-20"></div>
                  <div class="tracker tr-21"></div>
                  <div class="tracker tr-22"></div>
                  <div class="tracker tr-23"></div>
                  <div class="tracker tr-24"></div>
                  <div class="tracker tr-25"></div>
                  <div id="card4">
                  <p id="prompt4">SUNRISE AND SUNSET</p>
                    <div class="title SUNRISE">${SUNRISE}</div>
                    <br>
                    <div class="title SUNSET">${SUNSET}</div>
                    
                  </div>
                </div>
              </div>  
        
              <!--card 5-->
             
              <div class="container5 noselect">
                <div class="canvas">
                  <div class="tracker tr-1"></div>
                  <div class="tracker tr-2"></div>
                  <div class="tracker tr-3"></div>
                  <div class="tracker tr-4"></div>
                  <div class="tracker tr-5"></div>
                  <div class="tracker tr-6"></div>
                  <div class="tracker tr-7"></div>
                  <div class="tracker tr-8"></div>
                  <div class="tracker tr-9"></div>
                  <div class="tracker tr-10"></div>
                  <div class="tracker tr-11"></div>
                  <div class="tracker tr-12"></div>
                  <div class="tracker tr-13"></div>
                  <div class="tracker tr-14"></div>
                  <div class="tracker tr-15"></div>
                  <div class="tracker tr-16"></div>
                  <div class="tracker tr-17"></div>
                  <div class="tracker tr-18"></div>
                  <div class="tracker tr-19"></div>
                  <div class="tracker tr-20"></div>
                  <div class="tracker tr-21"></div>
                  <div class="tracker tr-22"></div>
                  <div class="tracker tr-23"></div>
                  <div class="tracker tr-24"></div>
                  <div class="tracker tr-25"></div>
                  <div id="card5">
                    <p id="prompt5">TEMP-MIN & TEMP-MAX </p>
                    <div class="title TEMPMIN">${TEMPMIN}</div>
                    <div class="title TEMPMAX">${TEMPMAX}</div>
                    
                  </div>
                </div>
              </div>   
             
        
              
              
            
              
              
            
        </body>
        </html>`);
        res.send();

    })

   });
  });



  
  app.listen(process.env.PORT || 3000,function(){
    console.log("server is running on port 3000");
  })