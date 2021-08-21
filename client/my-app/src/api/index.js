import Geocode from "react-geocode";

Geocode.setApiKey("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"); // set API key

export const getLatLngFromAddress = (address) => { 
    // Get latitude & longitude from address.
    Geocode.fromAddress(address).then(
        (response) => {
            const { lat, lng } = response.results[0].geometry.location;
            console.log(lat, lng);
            return({lat, lng});
        }
    ).catch((error) => {console.log(error)});
}