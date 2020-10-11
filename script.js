//declarations
const tempF = document.querySelector('.fahrenheit');
const tempC = document.querySelector('.celcius');
const tempDescription = document.querySelector('.temperature-description');
const locationApi = document.querySelector('.location-timezone');
const iconElement = document.querySelector('#weatherIcons');
const enterLocation = document.querySelector('.searchInput');
//billing needed for google location api
// console.log(enterLocation.value);
// function initMap() {
//     const searchBox = new google.maps.places.SearchBox(enterLocation, {

//     });
// }
//Event Listeners
window.addEventListener('load', ()=>{
    let lati;
    let long;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            lati = position.coords.latitude;
            long = position.coords.longitude;
                // console.log(lati,long)
                // const proxy = 'https://cors-anywhere.herokuapp.com/';
                const api= `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=ac21cfff886acb265be03d84ee7e678a`;
                fetch(api).then(res=>{return res.json()}).then(data=>{
                const temperatureF = (data.main.temp - 273.15)*(9/5)+32;
                const temperatureC = (data.main.temp - 273.15);
                const description = data.weather[0].description;
                const weatherDescription = data.weather[0].main;
                const iconId = data.weather[0].icon;
                // console.log(temperatureF,description)
                //DOM
                tempF.innerText = temperatureF.toFixed(1);
                tempC.innerText = temperatureC.toFixed(1);
                tempDescription.innerText= description.toUpperCase();
                locationApi.innerText = `${data.name}, ${data.sys.country}`;
                iconElement.innerHTML = `<img src="Icons/${iconId}.png"/ width='150px' height = '150px'>`;
                // console.log(data)
                // console.log(iconElement) 
            });
            
        });
} else{
    locationApi.innerText = 'Enter Location';
    console.log('enter location');
}
});

enterLocation.addEventListener('change', ()=>{
    let place = enterLocation.value;
    // console.log(place);
    //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    const api= `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=ac21cfff886acb265be03d84ee7e678a`;
            fetch(api).then(res=>{return res.json()}).then(data=>{
                const temperatureF = (data.main.temp - 273.15)*(9/5)+32;
                const temperatureC = (data.main.temp - 273.15);
                const description = data.weather[0].description;
                const weatherDescription = data.weather[0].main;
                const iconId = data.weather[0].icon;
                // console.log(temperatureF,description)
                //DOM
                tempF.innerText = temperatureF.toFixed(1);
                tempC.innerText = temperatureC.toFixed(1);
                tempDescription.innerText= description.toUpperCase();
                locationApi.innerText = `${data.name}, ${data.sys.country}`;
                iconElement.innerHTML = `<img src="Icons/${iconId}.png"/ width='150px' height = '150px'>`;
                // console.log(data)
                // console.log(iconElement) 
            });


})

