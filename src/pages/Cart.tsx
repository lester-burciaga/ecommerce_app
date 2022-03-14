import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { addItem, deleteItem } from "../redux/cartSlice";
import { Product } from "../types/types";

function Cart() {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleAddCartItem = (product: Product) => {
    dispatch(addItem(product));
  };

  const handleDeleteCartItem = (product: Product) => {
    dispatch(deleteItem(product));
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-3">
        <div className="container py-4">
          <div className="row">
            <h1>Your Cart is Empty</h1>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {cart.length === 0 && emptyCart()}
      {cart.length !== 0 &&
        cart.map((item) => (
          <div className="px-4 my-5 bg-light rounded-3" key={item.id}>
            <div className="container py-4">
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    height="200px"
                    width="180px"
                  />
                </div>
                <div className="col-md-4">
                  <h3>{item.title}</h3>
                  <p className="lead fw-bold">
                    {item.qty} X ${item.price} = ${item.qty * item.price}
                  </p>
                  <button
                    className="btn btn-outline-dark me-4"
                    onClick={() => handleDeleteCartItem(item)}
                  >
                    <i className="fa fa-minus"></i>
                  </button>
                  <button
                    className="btn btn-outline-dark me-4"
                    onClick={() => handleAddCartItem(item)}
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default Cart;
