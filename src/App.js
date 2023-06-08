import NavTop from "./Component/Navber/NavTop"

import './App.css';
import Center from "./Component/Navber/Center";
import Section3 from './Component/headers/section3';
import Boxes from './Component/headers/Boxes';
 import Cart from './Component/Navber/Cart';
 import Flips from './Component/headers/Flips';
 import Partner from './Component/headers/Partner';
 import Fotter from '../src/Component/headers/Fotter';


function App() {
  return (
    <div>
      <NavTop />
      <Center />
      <Section3 />
      <Boxes />
      <Cart />
      <Flips />
      <Partner />
      <Fotter />
   
    </div>
  );
}

export default App;
