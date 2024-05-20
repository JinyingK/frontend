
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import {Categories} from './Pages/Categories';
import {Product} from './Pages/Product';
import {ShopCart} from './Pages/ShopCart';
import {LoginSignup} from './Pages/LoginSignup';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/meats' element={<Categories category="meats"/>}/>
        <Route path='/vege' element={<Categories category="vege"/>}/>
        <Route path='/dairy' element={<Categories category="dairy"/>}/>
        <Route path='/help' element={<Categories category="help"/>}/>
        <Route path='/about' element={<Categories category="about"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<ShopCart/>}/>
        <Route path='/loginsignup' element={<LoginSignup/>}/>
      </Routes>

      </BrowserRouter>
      

    </div>
  );
}

export default App;
