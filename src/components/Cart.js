import { useDispatch, useSelector } from "react-redux";
import RestrauntCard from "./RestaurantCard";
import { resImage } from "../config";
import { clearCart } from "../utils/cartSlice";

const CartItemCard = ({ name, cloudinaryImageId }) => {
  return (
    <div className="w-56 p-5  bg-pink-50 m-3 shadow-md hover:bg-blue-200 hover:scale-105">
      <img src={`${resImage}/${cloudinaryImageId}`} />
      <h2 className="font-bold mt-1 text-xl">{name}</h2>
    </div>
  );
};

const Cart = () => {
  // let's useSelector for subscribe to the cart
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log(cartItems);
  return (
    <div>
      <h1 className="text-5xl font-bold p-5 text-red-400">
        Cart Items - {cartItems.length}
      </h1>
      <button
        onClick={() => {
          handleClearCart();
        }}
        className="bg-orange-500 text-white p-3 m-4"
      >
        Clear Cart
      </button>
      {cartItems.map((item) => (
        <CartItemCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cart;
