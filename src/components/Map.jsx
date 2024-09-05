import { useNavigate } from 'react-router-dom'
import styles from '../style/Map.module.css'
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent } from 'react-leaflet';
import { useCities } from "../context/CitiesContext";
import { useEffect, useState } from 'react';
import useGeolocation from '../hooks/useGeoLocation';
import useUrlPosition from '../hooks/useUrlPosition';
import Button from './Button';

function Map() {
    const navigate = useNavigate();
    const [mapPosition, setMapPosition] = useState([40, 0])
    const { cities } = useCities();
    const { isLoading: isLoadingPosition, position: geoLocationPosition, getPosition } = useGeolocation();
    const [mapLat, mapLng] = useUrlPosition();

    useEffect(
        function () {
            if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
        },
        [mapLat, mapLng]
    );

    useEffect(
        function () {
            if (geoLocationPosition) setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
        },
        [geoLocationPosition]
    );

    return (
        <div className={styles.mapContainer} >
            {!geoLocationPosition && <Button type={"position"} onClick={getPosition}>
                {isLoadingPosition ? 'Loading...' : 'use your position'}
            </Button>}
            <MapContainer
                className={styles.map}
                // center={mapPosition}
                center={mapPosition}
                zoom={6}
                scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                {cities.map((city) => <Marker key={city.id} position={[city.position.lat, city.position.lng]}>
                    <Popup>
                        <span>{city.emoji}</span> {city.cityName}
                    </Popup>
                </Marker>)}
                <ChangeCenter position={mapPosition} />
                <DetectClick />
            </MapContainer>

        </div >
    )
}
function ChangeCenter({ position }) {
    const map = useMap();
    map.setView(position);
    return null;
}
function DetectClick() {
    const navigate = useNavigate();
    useMapEvent({
        click: (ev) => {
            console.log("ev");
            console.log(ev);
            navigate(`form?lat=${ev.latlng.lat}&lng=${ev.latlng.lng}`)
        }
    })
}

export default Map
