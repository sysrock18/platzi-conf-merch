import { useState, useEffect } from 'react';
import axios from 'axios';

const useAddress = address => {
    const [map, setMap] = useState({});
    const accessKey = '	9NE2RnAIV9YYDTkXftZo7QLaSGdJj2eV';
    const API = `http://www.mapquestapi.com/geocoding/v1/address?key=${accessKey}&location=${address}`;

    useEffect(async () => {
        const response = await axios(API);
        const { results } = response.data;
        if (results != null && results.length > 0) {
            const location = results[0].locations[0];
            setMap(location.latLng);
        } else {
            setMap({});
        }
    }, []);

    return map;
};

export default useAddress;
