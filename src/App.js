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
import ManageProducts from "./Component/Pages/DashBoard/ManageProducts";
import RequireAuth from "./Component/Pages/Shared/RequireAuth";
import RequireAdmin from "./Component/Pages/Shared/RequireAdmin";
import Payment from "./Component/Pages/DashBoard/Payment";


function App() {
  return (
    <div>
      <Nav/>
      <div className='px-4 md:px-9 lg:px-12'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="inventory" element={<Inventory/>} />
          <Route path="/inventory/:partsId" element={<RequireAuth><PartsDetails/></RequireAuth>} />
          <Route path="/inventory/:partsId/purchase" element={<RequireAuth><Purchase/></RequireAuth>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Registration/>} />
          <Route path="/dashboard" element={<RequireAuth><DashBoard/></RequireAuth>} >
            <Route index element={<RequireAuth><MyOrder/></RequireAuth>}/>
            <Route path="my-review" element={<RequireAuth><MyReview /></RequireAuth>} />
            <Route path="profile" element={<RequireAuth><MyProfile /></RequireAuth>} />
            <Route path="all-order" element={<RequireAdmin><ManageAllOrders /></RequireAdmin>} />
            <Route path="addparts" element={<RequireAdmin><AddAParts /></RequireAdmin>} />
            <Route path="makeAdmin" element={<RequireAdmin><MakeAdmin /></RequireAdmin>} />
            <Route path="manegeProduct" element={<RequireAdmin><ManageProducts /></RequireAdmin>} />
            <Route path="payment/:id" element={<RequireAuth><Payment /></RequireAuth>} />
          </Route>
        </Routes>
      </div>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
