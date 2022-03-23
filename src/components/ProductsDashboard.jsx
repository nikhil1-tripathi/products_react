import React, { useEffect, useState } from "react";
import "./products.css"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProductsReq, getProductsSuccess, getProductsFailure, getproductsData, sortProducts } from "../Redux/actions"
import { store } from "../Redux/store";

export const Products = () => {
  const [query, setQuery] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, isLoading, isError } = useSelector((store) => store);
  let data = products;
  // to get all products list on component mounts
  useEffect(() => {

    handleProducts();

    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    // dispatch(getproductsData())
  }, []);

  const handleProducts = () => {
    dispatch(getProductsReq());
    fetch("https://movie-fake-server.herokuapp.com/products")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        dispatch(getProductsSuccess(data));
      }).catch(err => { dispatch(getProductsFailure()) })
  }

  //    sort by price
  const handleSort = (e) => {
    let val = e.target.value;
    console.log(val);
    dispatch(sortProducts(val));

    // dispach handle sort action to the store
  };
  return isLoading ? <h1>"LOADING"</h1> : (
    <>
      <h2>Products</h2>
      <select className="select" onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      <div className="products-list">

        {data &&
          data.map((ele) => {
            return (
              <Link className="link-list" to={`/product/${ele.id}`}  >

                <div className="mainbox" key={ele.id}>
                  <div className="box">
                    <img src={ele.image} />

                    <p> BRAND: {ele.brand}</p>
                    <p> CATEOGRY: {ele.category}</p>
                    <p> PRICE: {ele.price}</p>
                    <p> TITLE: {ele.title}</p>
                  </div>

                  <div />

                </div>
              </Link>
            )

          })}
      </div>
    </>
  );
};
