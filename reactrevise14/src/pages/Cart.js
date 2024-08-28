import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto px-4">
      {cart.length > 0 ? (
        <div className="flex flex-row mt-10">
          <div className="flex flex-col flex-1">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="ml-4">
            <div className="bg-gray-200 p-4 rounded-lg">
              <div className="font-bold">Your Cart</div>
              <div className="font-bold mb-2">Summary</div>
              <p>
                <span className="font-semibold">
                  Total Items: {cart.length}
                </span>
              </p>
            </div>

            <div className="mt-4">
              <p className="font-semibold">Total Amount: ${totalAmount}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Check Out Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-10">
          <h1 className="text-2xl font-bold mb-4">Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
