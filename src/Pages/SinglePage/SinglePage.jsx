import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import './SinglePage.scss';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import data from '../../Components/Assets/dummydata/dummydata';
import { Context } from '../../Context/Products';

const SinglePage = () => {
  const [state, dispatch] = useContext(Context);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const addToBasket = () => {
    console.log(product);
    const newArr = [ ...state.basket, product ];
    const addTo = JSON.stringify(newArr);
    localStorage.setItem('basket', addTo);
    dispatch({
      type: "BASKET",
      payland: { basket: newArr }
    });
  };

  useEffect(() => {
    const apiUrl = `https://example-data.draftbit.com/sneakers/${productId}`;
    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          const dummyProduct = data.products.find((product) => product.id === productId);
          if (dummyProduct) {
            setProduct(dummyProduct);
          }
        }
      })
      .then((data) => {
        if (data) {
          setProduct(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [productId]);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="singlepage">
      <Navbar />
      <div className="singlepage-container">
        <Link to="/">
          <button className="back-button">Back to Home</button>
        </Link>
        {product ? (
          <div className="product-container">
            <div className="product-wrapper">
              <div className="left-product-container">
                <div className="img-container-product">
                  <img src={product.media.imageUrl} alt="Product" />
                </div>
              </div>
              <div className="right-product-container">
                <div className="product-details">
                  <h1>{product.title}</h1>
                  <p>Price: ${product.retailPrice}</p>
                  <div className="product-minidetails">
                    <div className="SKU">
                      <h3>SKU: {product.styleId}</h3>
                    </div>
                    <div className="Category-product">
                      <h3>Category: {product.gender}</h3>
                    </div>
                  </div>
                  {product.sizes && product.sizes.length > 0 ? (
                    <div className="product-size">
                      <p>Select Size</p>
                      <div className="size-buttons">
                        {product.sizes.map((size) => (
                          <button
                            key={size}
                            className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                            onClick={() => handleSizeSelection(size)}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p>No sizes available</p>
                  )}
                  <div className="products-btns">
                    <span className='linki-prod'>
                      <button onClick={() => addToBasket()} className="btn-description">Add to cart</button>
                    </span>
                    <Link to="/" className='linki-prod'>
                      <button className="btn-description wishlist">Add To wishlist</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="product-not-found">Product not found</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SinglePage;
