import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './ShopAll.scss';
import data from '../../Components/Assets/dummydata/dummydata';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Products';

const ShopAll = () => {
  const [state, dispatch] = useContext(Context);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const addToBasket = (obj) => {
    console.log(obj);
    const newArr = [ ...state.basket, obj ];
    const addTo = JSON.stringify(newArr);
    localStorage.setItem('basket', addTo);
    dispatch({
      type: "BASKET",
      payland: { basket: newArr }
    });
  };

  useEffect(() => {
    const apiUrl = 'https://example-data.draftbit.com/sneakers?_limit=50';

    axios.get(apiUrl)
      .then((response) => {
        const combinedProducts = [...data.products, ...response.data];
        setProducts(combinedProducts);
        setFilteredProducts(combinedProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchInput, products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="footer-searchbar">
        <hr id="first" />
        <button className="back-button" onClick={() => window.location.href = '/'}>Back to Home</button>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossOrigin="anonymous"
        />

        <form action="">
          <input
            type="search"
            required
            placeholder="Search here"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <i className="fa fa-search"></i>
        </form>
      </div>

      <div className="product-container">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-overlay"></div>
            <img src={product.media.imageUrl} alt={product.title} className="product-image" />
            <div className="product-details">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-gender">{product.gender}</p>
              <p className="product-retailPrice">Price: ${product.retailPrice}</p>
              <button onClick={() => addToBasket(product)} className="buy-button">Add to Card</button>
              <Link to={`/singlepage/${product.id}`}>
                 <button className="buy-button">Buy Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className='simple-navbar'>
      <hr id="first"/>
      <p id="paragraf-footer">
          Copyright by Albion Paqarizi 2023 All right reserved
        </p>
      </div>
    </>
  );
};

export default ShopAll;
