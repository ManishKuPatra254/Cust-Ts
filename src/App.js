
import './App.css';
import { NavBar } from './NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Pages/Home/Home'
import { MenFashion } from './Components/Pages/MenFashion/MenFashion';
import { WomenFashion } from './Components/Pages/WomenFashion/WomenFashion';
import { Accessories } from './Components/Pages/Accessories/Accessories';
import { AddtoCart } from './Components/Pages/Add To Cart/AddToCart';
import { Footer } from './Footer/Footer';
import { Checkout } from './Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/menfashion' element={<MenFashion />}></Route>
          <Route path='/womenfashion' element={<WomenFashion />}></Route>
          <Route path='/accessories' element={<Accessories />}></Route>
          <Route path='/addtocart' element={<AddtoCart />}></Route>
          <Route path='/checkout/:id' element={<Checkout />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
