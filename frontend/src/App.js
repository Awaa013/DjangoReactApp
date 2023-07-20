
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Produits from "./Components/Produits";
import Manage from "./Components/Manage";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { handleSearch } from './Components/Manage';

function App() {
  return (
    <BrowserRouter>
    <Navigation />

    <Routes>
    <Route exact path= "/" element={<Home/>} />
    <Route exact path= "/produits" element={<Produits/>} />
    <Route exact path= "/gestion" element={<Manage/>} />
    </Routes>
    </BrowserRouter>

);

}

export default App;
