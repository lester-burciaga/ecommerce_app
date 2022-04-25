import { useAppSelector, useAppDispatch } from "@redux/hooks";
import { addItem, deleteItem } from "@redux/cartSlice";
import { Product } from "@model/types";

function Cart() {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleAddCartItem = (product: Product) => {
    dispatch(addItem(product));
  };

  const handleDeleteCartItem = (product: Product) => {
    dispatch(deleteItem(product));
  };

  const handleCartTotal = (items: Product[]) =>
    items.reduce((ack: number, item) => ack + item.qty * item.price, 0);

  const EmptyCart = () => {
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
      {cart.length === 0 && <EmptyCart />}
      {cart.length !== 0 && (
        <>
          <div className="d-flex justify-content-end">
            <h2 className="px-5 my-3">
              Total: ${handleCartTotal(cart).toFixed(2)}
            </h2>
          </div>
          {cart.map((item) => (
            <div className="px-4 my-4 bg-light rounded-3" key={item.id}>
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
                      {item.qty} X ${item.price} = $
                      {(item.qty * item.price).toFixed(2)}
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
      )}
    </>
  );
}

export default Cart;
