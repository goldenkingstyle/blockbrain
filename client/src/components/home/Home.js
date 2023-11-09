import React from 'react';
import './Home.css'
import search from '../../images/search.png'
import address from '../../images/address.png'
import block from '../../images/block.png'
import transaction from '../../images/transaction.png'

const Home = () => {
    return (
        <div className="Home">
            <div className="main">
                <div className="main-title">Blockchain explorer, analytics and web services</div>
                <div className="main-search">
                    <div className="main-search-image"><img src={search} alt=""/></div>
                    <div className="main-input"><input type="text"
                                                       placeholder="Search for transactions, addresses, blocks and embedded text data..."/>
                    </div>

                </div>
                <div className="main-generation">
                    <div>Search examples:</div>
                    <div className="main-generation-item"><img src={address} alt=""/>
                        <div>Address</div>
                    </div>
                    <div className="main-generation-item"><img src={block} alt=""/>
                        <div>Block</div>
                    </div>
                    <div className="main-generation-item"><img src={transaction} alt=""/>
                        <div>Transaction</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;