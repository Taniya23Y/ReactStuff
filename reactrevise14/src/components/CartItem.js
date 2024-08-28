import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex justify-between items-center border-b border-gray-200 py-4">
      <div className="flex items-center">
        <img
          className="h-28 w-28  object-cover rounded"
          src={item.image}
          alt={item.title}
        />
        <div className="ml-4">
          <h1 className="text-lg font-semibold">{item.title}</h1>
          <p className="text-gray-600 mr-32">{item.description}</p>
          <p className="mt-1">${item.price}</p>
          <div className="cursor-pointer relative" onClick={removeFromCart}>
            <MdDelete className=" justify-center items-center text-red-500 mx-auto text-xl ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
