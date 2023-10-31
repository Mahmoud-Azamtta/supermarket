import Navbar from './components/Navbar/Navbar'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Resturant from './components/Resturant/Resturant';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/products' element={ <Products /> } />
        <Route path='/resturant' element={ <Resturant /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
