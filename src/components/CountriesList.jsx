import styles from '../style/CountriesList.module.css';
import CountryItem from './CountryItem';
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from '../context/CitiesContext';

function CountriesList() {

    const { cities, isLoading } = useCities();

    if (isLoading) return <Spinner />;

    if (!cities.length) return <Message message={"Add your first country by clicking on a country on the map"} />;

    let countries = cities.reduce((arr, city) => {
        let checkArr = !arr.map((el) => el.country).includes(city.country);

        if (checkArr) {
            return [...arr, { country: city.country, emoji: city.emoji }];
        } else {
            return arr;
        }
    }, []);

    return (
        <ul className={styles.countryList}>
            {countries.map((singleCountry) => <CountryItem country={singleCountry} key={singleCountry.country} />)}
        </ul>
    )
}

export default CountriesList
