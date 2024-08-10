import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./pages/Product"
import HomePage from "./pages/HomePage"
import Pricing from "./pages/Pricing"
import PageNotFound from "./pages/PageNotFound"

function App() {
  // let test = 5;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App