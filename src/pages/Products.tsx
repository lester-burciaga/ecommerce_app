import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

import { useFetchItems, useFetchCategories } from "@redux/hooks";
import { Product } from "@model/types";
import ProductsList from "@components/ProductsList";

function Products() {
  const { data, loadingItems } = useFetchItems();
  const { categories, loadingCategories } = useFetchCategories();
  const [filterItems, setFilterItems] = useState<Product[]>();

  useEffect(() => {
    setFilterItems(data);
  }, [data]);

  const Loading = ({ h = 100, w = 300 }) => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={h} width={w} />
        </div>
      </>
    );
  };

  const handleFilter = (category: string) => {
    const updatedList = data
      ? data.filter((item) => item.category === category)
      : [];
    setFilterItems(updatedList);
  };

  const ShowFilter = () => {
    return (
      <div className="buttons d-flex justify-content-center pb-5">
        <button
          className="text-capitalize btn btn-outline-dark me-2"
          onClick={() => setFilterItems(data)}
        >
          All
        </button>
        {categories &&
          categories.map((category, index) => (
            <button
              key={index}
              className="text-capitalize btn btn-outline-dark me-2"
              onClick={() => handleFilter(category.toString())}
            >
              {category}
            </button>
          ))}
      </div>
    );
  };

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          {loadingCategories ? <Loading h={50} w={350} /> : <ShowFilter />}
          {loadingItems ? (
            <Loading h={300} w={350} />
          ) : (
            <ProductsList items={filterItems} />
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
