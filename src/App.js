import { Route , Routes } from "react-router";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import SetProducts from "./components/SetProducts";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<SetProducts/>}/>
      <Route path="/productdetail/:id" element={<ProductDetail/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  );
}

export default App;
