import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import axios from "axios";

import { addItem } from "@redux/cartSlice";
import { useParams } from "react-router";
import { Product } from "@model/types"
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

function Item() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { user } = useAppSelector((state) => state.user);
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(false);

  const handleAddItem = (product: Product) => {
    dispatch(addItem(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(await response.data);
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        {product ? (
          <>
            <div className="col-md-6">
              <img
                src={product.image}
                alt={product.title}
                height="400px"
                width="400px"
              />
            </div>
            <div className="col-md-6">
              <h4 className="text-uppercase text-black-50">
                {product?.category}
              </h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead fw-bolder">
                Rating: {product?.rating.rate}
                <i className="fa fa-star" />
              </p>
              <h3 className="display-6 fw-bold my-4">${product.price}</h3>
              <p className="lead">{product.description}</p>
              {user.isAuthenticated ? (
                <>
                  <button
                    className="btn btn-outline-dark px-4 py-2"
                    onClick={() => handleAddItem(product)}
                  >
                    Add to Cart
                  </button>
                  <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                    Go to Cart
                  </NavLink>{" "}
                </>
              ) : (
                <p className="fw-bold my-4 text-danger">
                  *You must be logged in to add items on your cart
                </p>
              )}
            </div>
          </>
        ) : null}
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}

export default Item;
