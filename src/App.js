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
import DashBoard from "./Component/Pages/DashBoard/DashBoard";
import MyOrder from "./Component/Pages/DashBoard/MyOrder";
import MyReview from "./Component/Pages/DashBoard/MyReview";
import MyProfile from "./Component/Pages/DashBoard/MyProfile";
import ManageAllOrders from "./Component/Pages/DashBoard/ManageAllOrders";
import AddAParts from "./Component/Pages/DashBoard/AddAParts";
import MakeAdmin from "./Component/Pages/DashBoard/MakeAdmin";


function App() {
  return (
    <div>
      <Nav/>
      <div className='px-4 md:px-9 lg:px-12'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="inventory" element={<Inventory/>} />
          <Route path="/inventory/:partsId" element={<PartsDetails/>} />
          <Route path="/inventory/:partsId/purchase" element={<Purchase/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Registration/>} />
          <Route path="/dashboard" element={<DashBoard/>} >
            <Route index element={<MyOrder/>}/>
            <Route path="my-review" element={<MyReview />} />
            <Route path="profile" element={<MyProfile />} />
            <Route path="all-order" element={<ManageAllOrders />} />
            <Route path="addparts" element={<AddAParts />} />
            <Route path="makeAdmin" element={<MakeAdmin />} />
          </Route>
        </Routes>
      </div>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
