import Products from "./Products";

function Home() {
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
            <h5 className="card-title display-3 text-dark fw-bolder mb-0">NEW SEASON ARRIVALS</h5> 
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
