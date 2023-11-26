import React, { useState } from "react";
import "./Home.css";
import search from "../../images/search.png";
import address from "../../images/address.png";
import block from "../../images/block.png";
import transaction from "../../images/transaction.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/address/" + value, { state: { value } });
  };

  return (
    <div className="Home">
      <div className="main-container">
        <div className="main">
          <div className="main-title">
            Blockchain explorer, analytics and web services
          </div>
          <div className="main-search">
            <div className="main-search-image">
              <img src={search} onClick={handleSearchClick} alt="" />
            </div>
            <div className="main-input">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="Search for transactions, addresses, blocks and embedded text data..."
              />
            </div>
          </div>
          <div className="main-generation">
            <div>Search examples:</div>
            <div className="main-generation-item">
              <img src={address} alt="" />
              <div>Address</div>
            </div>
            <div className="main-generation-item">
              <img src={block} alt="" />
              <div>Block</div>
            </div>
            <div className="main-generation-item">
              <img src={transaction} alt="" />
              <div>Transaction</div>
            </div>
          </div>
        </div>
      </div>
      <div className="blockchains-container">
        <div className="blockchains">
          <div className="blockchains-title">Explore blockchains</div>
          <div className="blockchains-grid">
            <div className="blockchains-item"></div>
            <div className="blockchains-item"></div>
            <div className="blockchains-item"></div>
            <div className="blockchains-item"></div>
            <div className="blockchains-item"></div>
            <div className="blockchains-item"></div>
            <div className="blockchains-item"></div>
            <div className="blockchains-item"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
