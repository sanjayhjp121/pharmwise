import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./navbarsearch.css";

const Navbarsearch = () => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const fillSearch = (e) => {
    const key = e.key;
    const value = e.target.value;
    setSearch(value);
    if (key === "Enter" && value.trim().length > 0) {
      setList([]);
      navigate(`/products?search=${value}`);
    }
  };

  const searchResult = (index) => {
    navigate(`/products?search=${list[index]}`);
    setSearch("");
    setList([]);
  };

  return (
    <div className="subnavtwo">
      <div className="left">
        <div className="search">
          <div className="input">
            <input
              type="text"
              placeholder="Search for Medicines and Health Products"
              onKeyUp={fillSearch}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="button" onClick={() => {
            if (search.trim().length > 0) {
              setList([]);
              navigate(`/products?search=${search}`);
            }
          }}>
            <img src="https://onemg.gumlet.io/cart-icon-rebrand_vp4k0f.svg" alt="Search" />
          </div>
          <div className="list">
            {list.map((element, index) => (
              <div
                className="listItem"
                onClick={() => searchResult(index)}
                key={index}
              >
                <p>{element}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="right">
        <div className="rightitem">
          <img src="https://onemg.gumlet.io/quick_buy_rebrand_lqpnce.svg" alt="Quick Buy" />
          <p> QUICK BUY! Get 25% off on medicines*</p>
        </div>
        <div className="rightitem">
          <button>Quick Order</button>
        </div>
      </div>
    </div>
  );
};

export default Navbarsearch;
