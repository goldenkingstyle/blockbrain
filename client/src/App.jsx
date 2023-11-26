import "./App.css";
import Address from "./components/address/Address";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/address/:id"} element={<Address />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
