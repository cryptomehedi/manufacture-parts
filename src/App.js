import { Route, Routes } from "react-router-dom";
import Home from "./Component/Pages/Home/Home";
import Inventory from "./Component/Pages/Inventory/Inventory";
import PartsDetails from "./Component/Pages/Inventory/PartsDetails";
import Login from "./Component/Pages/Login-Registration/Login";
import Footer from "./Component/Pages/Shared/Footer";
import Nav from "./Component/Pages/Shared/Nav";


function App() {
  return (
    <div>
      <Nav/>
      <div className='px-4 md:px-9 lg:px-12'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/inventory/:partsId" element={<PartsDetails/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
