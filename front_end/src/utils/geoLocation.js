import { useState, useEffect } from "react"

export const useLocation = (options = {}) => {
    const [location, setLocation] = useState();
    const [error, setError] = useState();

    const handleSuccess = (pos) => {
        const { latitude, longitude } = pos.coords;

        setLocation({
            latitude,
            longitude,
        });
        console.log(pos.coords)
    };

    const handleError = (error) => {
        setError(error.message);
    };

    useEffect(() => {
        const { geolocation } = navigator;
        if (!geolocation) {
            setError("Can't get geoLocation!!!! ");
            return;
        }
        geolocation.getCurrentPosition(handleSuccess, handleError, options);
    }, [options]);


    return { position: location, error };
};


//part of code was has been used from source online -Gordon Mathurin























// try {
//     if ('geolocation' in navigator) {
//         console.log("geolocation available")
//         navigator.geolocation.getCurrentPosition((position) => {
//             console.log(position)
//         });
//     }
// } catch (err) {
//     console.log("geolocation not available", err)
// }
