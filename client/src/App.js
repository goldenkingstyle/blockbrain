import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
