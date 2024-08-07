import { useState } from 'react'
import Products  from './pages/Products'
import Home from './pages/Home'
import Categories from './pages/Categories'
import ErrorPage from './pages/ErrorPage'
import ProductDetails from './pages/ProductDetails'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="categories" element={<Categories/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="/product-details/:productId?" element={<ProductDetails/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
