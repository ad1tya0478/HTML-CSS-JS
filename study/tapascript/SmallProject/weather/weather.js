const searchbtn = document.getElementById("search");
        const results = document.getElementById("result");
        const val = document.getElementById("city-input").value;
        
        searchbtn.addEventListener("click", async () => {
            console.log("clicked")
            const apikey = 'b6c0ebc8fcb3e08c606b925f6f48e825';
            const city = document.getElementById("city-input").value.trim();  // we are using trim, to chop off extra spaces before or after the input.
            
            if(!city){
                results.innerHTML = "Enter a location, you fool.";
                return;
            }

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

            const res = await fetch(url);
            const data = await res.json();

           

            // fetch(url)
            //     .then(response => response.json())
            //     .then(json => {
            //         if(json.cod==='404'){
            //             results.innerHTML = `Not found`;
            //         }
            //         results.innerHTML = `
            //             <h2> ${data.name}, ${json.sys.country} </h2>  
            //             <p> 🌡️ Temperature: ${json.main.temp}°C </p>
            //             <p> 🌥️ Weather: ${json.weather[0].description} </p>
            //             <p> 🎐 Wind: ${json.wind.speed} m/s </p>
            //         `;
            //     })


            
            // data - json response from the api, dada.cod - a status code sent by openweather
            if(data.cod == "404"){
                results.innerHTML = "City not found";
            } else {
                
                 const condition = data.weather[0].main; 
                updateBackground(condition);

                const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
                const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
                // data.name = name of the city, data.sys.country = country code(sys is an object in api that contains these details like country code)
                // data.main.temp = main is an object of api as well, with that we can get temperature
                // data.weather[0].description = data.weather is an array, [0] with this we get the first object and that also adds to the description
                // data.wind.speed = data.wind is another object that contains more features, here we are finding speed. 
                results.innerHTML = `
                <div class="data">
                <h2> ${data.name}, ${data.sys.country} </h2>  
                <p> 🌡️ Temperature: ${data.main.temp}°C </p>
                <p> 🌥️ Weather: ${data.weather[0].description} </p>
                <p> 🎐 Wind: ${data.wind.speed} m/s </p>
                <p> 🌅 Sunrise: ${sunrise} | 🌇 SunSet: ${sunset} </p>
                </div>
                `;
            } 
        

        });

function updateBackground(condition){
    switch(condition){
        case 'Clear' : 
            document.body.style.background = "linear-gradient(to right, #fceabb, #f8b500)";
            break;
        case 'Rain':
            document.body.style.background = "linear-gradient(to right, #2c3e50, #4ca1af)";
            break;
        case 'Snow':
            document.body.style.background = "linear-gradient(to right, #e6e9f0, #eef1f5)";
            break;
        case 'Clouds':
            document.body.style.background = "linear-gradient(to right, #bdc3c7, #2c3e50)";
            break;
        case 'Thunderstorm':
            document.body.style.background = "linear-gradient(to right, #434343, #000000)";
            break;
        default:
            document.body.style.background = "linear-gradient(to right, #83a4d4, #b6fbff)";
            break;
    }
}