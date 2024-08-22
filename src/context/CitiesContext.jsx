import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:9000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  // State of the app
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // get the data from the fake API
  useEffect(() => {
    async function fetchCitesData() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        let data = await res.json();
        setCities(data);
      } catch (error) {
        console.log(error);
        alert("Error Fetching the data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCitesData();
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        setCities,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
// # CUSTOM HOOK TO STOP REPEATING useContext part
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("Cities Context was used outside of the CitiesContext");
  return context;
}
export { CitiesProvider, useCities };
