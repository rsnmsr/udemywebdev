const parentDiv=document.querySelector('#parent')

const d=new Date()
const toDay=`${d.getFullYear()}-0${(d.getMonth())+1}-${d.getDate()}`


navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    var accuracy = position.coords.accuracy;
  
    const url = "https://api.openweathermap.org/data/2.5/forecast/?lat=" + lat + "&lon=" + long + "&appid=0dbd13c3030ff73fad847624b1cc4fbe&units=metric";
  
    // const url="https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+long;
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {

       
        for (let timeValue of data.list) {
          // Input all the elements after creating 
            const childDiv = document.createElement('div')
            //Max temp
            const maxTemp = document.createElement('p')
            maxTemp.innerHTML = `Max/Min temp ${timeValue.main.temp_max}°C  ${timeValue.main.temp_min}°C;`
            //Humidity
            const humidity = document.createElement('p')
            humidity.innerHTML = `Humidity ${timeValue.main.humidity}`;

            //Feels like
            const tempFeels = document.createElement('p')
            tempFeels.innerHTML = `Feels Like ${timeValue.main.feels_like}°C`;

            const newDate = document.createElement('p')
            newDate.innerHTML = timeValue.dt_txt;

            childDiv.append(maxTemp,humidity,tempFeels,newDate)
            childDiv.classList.add('newParent')
            parentDiv.append(childDiv)

        }
      
     
      });
    });

