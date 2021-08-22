import Geocode from "react-geocode";
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY); // set API key

// lat lng from 
export const getLatLngFromAddress = (address) => { 
    // Get latitude & longitude from address.
    return Geocode.fromAddress(address).then(
        (response) => {
            const { lat, lng } = response.results[0].geometry.location;
            console.log(`from api: lat: ${lat} lng: ${lng}`);
            return({lat: lat, lng: lng});
        }
    );
}

export const getDataFromLatLng = async ({lat, lng}) => { 
    console.log(lat, typeof lat);
    console.log(lng, typeof lng);
    let result = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo`);
    // let result = await axios.get(`http://173.35.205.120:5001/getdata?lat=${lat}&lng=${lng}`);
    console.log(result)
}
