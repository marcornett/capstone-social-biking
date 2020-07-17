import { usePosition } from 'use-position';

export const LocateUserPosition = () => {
    const {
        latitude,
        longitude,
        accuracy,
        // error,
    } = usePosition();
    console.log(`latitude:${latitude}, longitude:${longitude}, accuracy:${accuracy}`)
}
















