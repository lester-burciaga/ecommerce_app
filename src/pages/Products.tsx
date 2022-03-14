import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { Category, Product } from "../types/types";

function Products() {
  const [data, setData] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getCatalog = async () => {
      setLoading(true);
      const resProducts = await fetch("https://fakestoreapi.com/products");
      const resCategories = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      if (componentMounted) {
        setData(await resProducts.clone().json());
        setFilter(await resProducts.json());
        setCategories(await resCategories.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getCatalog();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const handleFilter = (category: string) => {
    const updatedList = data.filter((item) => item.category === category);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="text-capitalize btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              className="text-capitalize btn btn-outline-dark me-2"
              onClick={() => handleFilter(category.toString())}
            >
              {category}
            </button>
          ))}
        </div>
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 text-center p-4">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text lead fw-bold">${product.price}</p>
                  <NavLink
                    to={`/products/${product.id}`}
                    className="btn btn-outline-dark"
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
}

export default Products;
