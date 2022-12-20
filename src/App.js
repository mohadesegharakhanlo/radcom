import { Route , Routes } from "react-router";
import Cart from "./components/Cart";
import NewCard from "./components/NewCard";
import ProductDetail from "./components/ProductDetail";
import SetProducts from "./components/SetProducts";
import Images from "./components/Images";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<SetProducts/>}/>
      <Route path="/productdetail/:id" element={<ProductDetail/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/newtask" element={<NewCard/>}/>
      <Route path="/images" element={<Images/>}/>
    </Routes>
  );
}

export default App;
