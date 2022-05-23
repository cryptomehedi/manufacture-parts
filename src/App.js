import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Component/Pages/Home/Home";
import Inventory from "./Component/Pages/Inventory/Inventory";
import PartsDetails from "./Component/Pages/Inventory/PartsDetails";
import Purchase from "./Component/Pages/Inventory/Purchase";
import Login from "./Component/Pages/Login-Registration/Login";
import Registration from "./Component/Pages/Login-Registration/Registration";
import Footer from "./Component/Pages/Shared/Footer";
import Nav from "./Component/Pages/Shared/Nav";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <Nav/>
      <div className='px-4 md:px-9 lg:px-12'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/inventory/:partsId" element={<PartsDetails/>} />
          <Route path="/inventory/:partsId/purchase" element={<Purchase/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Registration/>} />
        </Routes>
      </div>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
