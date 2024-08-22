 let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let input = document.getElementById("inp");
let API_Key = "c5501fec1f56f4650bf97ad1afddbc6c";

const data = async function(search) {
    try {
        let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_Key}&units=metric`);
        if (!getData.ok) {
            throw new Error(`Error: ${getData.statusText}`);
        }
        let jsonData = await getData.json();
        console.log(jsonData);
        
        city.innerHTML = jsonData.name;
        temp.innerHTML = Math.floor(jsonData.main.temp) + "°C";
        type.innerHTML = jsonData.weather[0].main;
        //console.log(type.innerHTML); // Check the weather type value

        // Move the image assignment logic here
        if (type.innerHTML == "Clouds") {
            image.src = "https://cdn-icons-png.flaticon.com/512/5497/5497205.png";
        } else if (type.innerHTML == "Clear") {
            image.src = "https://play-lh.googleusercontent.com/WHVv_pVDetZqwAsjUAdRfEXe1RFXJ__39sHlIHDsRpNPwAL_9FXVrrnOfV3_cSccJes=w480-h960-rw";
        } else if (type.innerHTML == "Rain") {
            image.src = "https://play-lh.googleusercontent.com/FiOJoWiDIjsd2PHUkOICXnnBZLrijDMHA6cM1TlGNMXAK0ibkD3v52IQLW0Zy8KPT6LS=w480-h960-rw";
        } else if (type.innerHTML == "Snow") {
            image.src = "https://img.freepik.com/premium-vector/button-icon-weather-mobile-app-website-snow-weather-forecast-element-cloud-snowflakes-3d_313242-1440.jpg?w=360";
        } else if (type.innerHTML == "Haze") {
            image.src = "https://cdn-icons-png.flaticon.com/512/5497/5497205.png";
        } else if (type.innerHTML == "Storm") {
            image.src = "https://play-lh.googleusercontent.com/FiOJoWiDIjsd2PHUkOICXnnBZLrijDMHA6cM1TlGNMXAK0ibkD3v52IQLW0Zy8KPT6LS=w480-h960-rw";
        } else {
            image.src = "default_image_url"; // Add a default image URL or handle unexpected weather types
        }
    } catch (error) {
       // console.error(error);
        city.innerHTML = "Error fetching data";
        temp.innerHTML = "";
        type.innerHTML = "";
        image.src = ""; // Clear the image if there's an error
    }
}

function myFun() {
    let search = input.value;
    data(search);
}

