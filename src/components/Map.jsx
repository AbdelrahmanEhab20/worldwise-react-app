import { useSearchParams } from 'react-router-dom'
import styles from '../style/Map.module.css'

function Map() {
    const [searchParams, setSearchParams] = useSearchParams();

    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    return (
        <div className={styles.mapContainer}>
            position lat = {lat} , lng = {lng}
        </div>
    )
}

export default Map
