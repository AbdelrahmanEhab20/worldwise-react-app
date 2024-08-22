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
import { CitiesProvider } from "./context/CitiesContext";


function App() {
  return (

    <CitiesProvider>
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
            <Route index element={<CityList />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountriesList />} />
            <Route path="form" element={<Form />} />
          </Route>
          {/* -------------------------------------- */}

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider >
  )
}

export default App
