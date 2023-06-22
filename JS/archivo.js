

/*--------------------------------clima-----------------------------*/
let lon;
let lat;
let temperatura = document.querySelector(".temp")
let resumen = document.querySelector(".resumen")
let localizacion = document.querySelector(".location")
let icon = document.querySelector(".icon")
const kelvin = 273.15





window.addEventListener("load",() =>{



if (navigator.geolocation){


navigator.geolocation.getCurrentPosition((position) => {


        console.log(position);
        lon = position.coords.longitude;
        lat = position.coords.latitude;


//ID API

    const api_id = "fa86368a60e3d5283a2a6f5752b7ef55";



    const url_base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&` + 
    `lon=${lon}&appid=${api_id}`;


    fetch(url_base)
    .then((response) => {

        console.log("RESPUESTA JSON");
       
        return response.json();
    })

    .then((data) => {


        console.log("ESTA ES LA DATA")
        console.log(data);


        temperatura.textContent =
            Math.floor(data.main.temp - kelvin) + "°C";
            resumen.textContent = data.weather[0].description;
            localizacion.textContent = data.name + "," + data.sys.country;
    });

});

}

});

/*--------------------FECHA Y HORA ----------------*/
let url = 'https://timezone.abstractapi.com/v1/current_time/?api_key=73552b4be59c44799a99d3e5e2812f5d&location= - Paraguay'
fetch(url)
    .then(response => response.json())
    .then(data => {
        let element = document.getElementById('elem')
        element.innerHTML = `
        <p><b>Fecha y hora:</b> ${data.datetime} ${data.requested_location}</p>
        `;
        console.log(data)

    })
    .catch(err=>console.log(err))

