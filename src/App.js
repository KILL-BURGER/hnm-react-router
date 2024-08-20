import "./App.css";
import {Route, Routes} from "react-router-dom";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<ProductAll/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/product/:id" element={<ProductDetail/>}/>
        </Routes>
    </div>;
}

export default App;
