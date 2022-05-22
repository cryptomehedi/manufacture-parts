import { Route, Routes } from "react-router-dom";
import Home from "./Component/Pages/Home/Home";
import Footer from "./Component/Pages/Shared/Footer";
import Nav from "./Component/Pages/Shared/Nav";


function App() {
  return (
    <div>
      <Nav/>
      <div className='px-4 md:px-9 lg:px-12'>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
