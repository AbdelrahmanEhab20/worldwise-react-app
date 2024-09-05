import { Link } from 'react-router-dom';
import styles from '../style/CityItem.module.css';
import { useCities } from '../context/CitiesContext';

const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));

function CityItem({ city }) {
    const { id, cityName, emoji, date, position } = city;
    const { currentCity, deleteCity } = useCities();
    async function handleDeleteClick(event) {
        event.preventDefault();
        deleteCity(id);
    }
    return (
        <li>
            <Link className={`${styles.cityItem} ${currentCity.id === id ? styles["cityItem--active"] : ''}`} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
                <span className={styles.emoji}>{emoji}</span>
                <h3 className={styles.name}>{cityName}</h3>
                <time className={styles.date}>({formatDate(date)})</time>
                <button className={styles.deleteBtn} onClick={handleDeleteClick}>&times;</button>
            </Link>
        </li>
    );
}

export default CityItem;