import axios from "axios"

class API {

}











//SETUP API 
/************************GEOLOCATION SETUP*******************************/
try {
    if ('geolocation' in navigator) {
        console.log("geolocation available")
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
        });
    }
} catch (err) {
    console.log("geolocation not available", err)
}
