import './App.css';
// import Sidenav from "./Sidenav";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Adduser from './pages/Adduser';
import Showuser from './pages/Showuser';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
   <>
   <ToastContainer/>
   <BrowserRouter>
   <Routes>
    <Route path='/' exact element={<Login/>}/>
    <Route path='/homepage' exact element={<Home/>}/>
    <Route path='/adduser' exact element={<Adduser/>}/>
    <Route path='/showuser' exact element={<Showuser/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
