import { Route, Routes } from "react-router-dom";
import Home from "./Component/Pages/Home/Home";
import Footer from "./Component/Pages/Shared/Footer";
import Nav from "./Component/Pages/Shared/Nav";


function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
