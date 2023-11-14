import { useCart } from "./context/CartContext";
import pic from "../assets/images/image-product-1-thumbnail.jpg";
import binIcon from "../assets/images/icon-delete.svg";
const CartInfo = () => {
  const cart = useCart();

  return (
    <div className="absolute w-[20rem] right-[-3rem] top-14 border z-10 bg-white flex flex-col items-start">
      <h4 className="font-bold  m-6">Cart</h4>

      <div className="text-[14px] border-t-[1px] w-full">
        {cart.cartProductQuantity === 0 ? (
          <div className="h-[8rem] flex items-center justify-center">
            <p className="font-bold text-darkGreyBlue">Your cart is empty.</p>
          </div>
        ) : (
          <div className="flex flex-col text-greyBlue">
            <div className="flex flex-row justify-between items-center ">
              <img src={pic} className="w-12 rounded mr-4 m-4" />
              <div className="flex flex-col justify-center items-start ">
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x{cart.cartProductQuantity}
                  <span className="font-bold text-black">
                    {" "}
                    ${125 * cart.cartProductQuantity}.00
                  </span>
                </p>
              </div>
              <button
                onClick={() => cart.handleDeleteCart()}
                className="h-5 m-4"
              >
                <img src={binIcon}></img>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartInfo;
