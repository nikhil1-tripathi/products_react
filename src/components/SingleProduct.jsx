import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getproductsData } from "../Redux/actions";
export const SingleProductList = () => {

  const { products, isLoading, isError } = useSelector((store) => store);
  let ele = products[0];

  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getproductsData(id))
  }, [])

  return <>
    <h1>PRODUCT DETAILS</h1>
    <div>
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
    </div>
  </>;
};
