import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Form from "./components/Form";
import CityList from "./components/CityList";
import CountriesList from "./components/CountriesList";
import City from "./components/City";

import { CitiesProvider } from "./context/CitiesContext";
import { AuthProvider } from "./context/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import SpinnerFullPage from "./components/SpinnerFullPage";


const HomePage = lazy(() => import('./pages/HomePage'))
const Login = lazy(() => import('./pages/Login'))
const PageNotFound = lazy(() => import('./pages/PageNotFound'))
const AppLayout = lazy(() => import('./pages/AppLayout'))
const Product = lazy(() => import('./pages/Product'))
const Pricing = lazy(() => import('./pages/Pricing'))
// import Product from "./pages/Product";
// import HomePage from "./pages/HomePage";
// import Pricing from "./pages/Pricing";
// import Login from "./pages/Login";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";

// dist/assets/index-4596941b.css   29.96 kB │ gzip:   5.09 kB
// dist/assets/index-b0011153.js   509.60 kB │ gzip: 148.96 kB

// After splitting and lazy loading
// dist/assets/Product.module-02d70b80.js    0.06 kB │ gzip:   0.07 kB
// dist/assets/PageNotFound-fbf3d58b.js      0.15 kB │ gzip:   0.15 kB
// dist/assets/Logo-16f02135.js              0.23 kB │ gzip:   0.21 kB
// dist/assets/PageNav-d0b5a7b4.js           0.49 kB │ gzip:   0.27 kB
// dist/assets/HomePage-cf339987.js          0.67 kB │ gzip:   0.42 kB
// dist/assets/Pricing-71e58a93.js           0.68 kB │ gzip:   0.43 kB
// dist/assets/Product-868835a3.js           0.89 kB │ gzip:   0.51 kB
// dist/assets/Login-457e2e15.js             0.94 kB │ gzip:   0.49 kB
// dist/assets/AppLayout-8fb2e360.js       157.05 kB │ gzip:  46.23 kB
// dist/assets/index-0ac9480b.js           350.73 kB │ gzip: 101.81 kB
function App() {
  return (

    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              {/*  path="/" we replaced with index  */}
              <Route index element={<HomePage />} />
              <Route path="/product" element={<Product />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/login" element={<Login />} />

              {/* -------------------------------------- */}
              {/* Nested ROUte with different details */}
              <Route path="/app" element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>} >
                <Route index element={<CityList />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountriesList />} />
                <Route path="form" element={<Form />} />
              </Route>
              {/* -------------------------------------- */}

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider >
    </AuthProvider>
  )
}

export default App
