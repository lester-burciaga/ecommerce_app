import Skeleton from "react-loading-skeleton";
import { useFetchItems } from "../redux/hooks";
import ProductsList from "../components/ProductsList";

function Home() {
  const { data, loadingItems } = useFetchItems("?limit=8");

  const Loading = ({ h = 100, w = 300 }) => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={h} width={w} />
        </div>
      </>
    );
  };

  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/bg.png"
          className="card-img"
          alt="background"
          height="550px"
        />
        <div className="card-img-overlay">
          <div className="container">
            <h5 className="card-title display-3 text-dark fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
          </div>
        </div>
      </div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loadingItems ? (
            <Loading h={300} w={350} />
          ) : (
            <ProductsList items={data} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
