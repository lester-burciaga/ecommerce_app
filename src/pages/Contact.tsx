import ContactImage from "@images/contact.png"

const Contact = () => {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>
              Have Some Questions?
              <hr />
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img
              src={ContactImage}
              alt="Contact Us"
              height="300px"
              width="300px"
            />
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="nameFormControlInput" className="form-label">
                  Full Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="nameFormControlInput"
                  placeholder="John Smith"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="emailFormControlInput" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailFormControlInput"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Send MEssage
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
