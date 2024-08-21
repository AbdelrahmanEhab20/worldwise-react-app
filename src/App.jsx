import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Product from "./pages/Product";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Form from "./components/Form";
import CityList from "./components/CityList";
import CountriesList from "./components/CountriesList";
import City from "./components/City";

const BASE_URL = "http://localhost:9000";

function App() {

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
    <BrowserRouter>
      <Routes>
        {/*  path="/" we replaced with index  */}
        <Route index element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />

        {/* -------------------------------------- */}
        {/* Nested ROUte with different details */}
        <Route path="/app" element={<AppLayout />} >
          <Route index element={<CityList cities={cities} isLoading={isLoading} />} />
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
          <Route path="cities/:id" element={<City cities={cities} />} />
          <Route path="countries" element={<CountriesList cities={cities} isLoading={isLoading} />} />
          <Route path="form" element={<Form />} />
        </Route>
        {/* -------------------------------------- */}

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
