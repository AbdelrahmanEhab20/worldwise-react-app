import styles from '../style/CityList.module.css';
import CityItem from './CityItem';
import Spinner from "./Spinner";
import Message from "./Message";

function CityList({ cities, isLoading }) {

    if (isLoading) return <Spinner />;

    if (!cities.length) return <Message message={"Add your first city by clicking on a city on the map"} />;

    return (
        <ul className={styles.cityList}>
            {cities.map((singleCity) => <CityItem city={singleCity} key={singleCity.id} />)}
        </ul>
    )
}

export default CityList
