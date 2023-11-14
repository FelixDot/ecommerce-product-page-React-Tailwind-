import { useCart } from "./context/CartContext";
import { React } from "react";
import cartIcon from "../assets/images/icon-cart.svg";

const InfoText = () => {
  const cart = useCart();

  const addButton = () => {
    cart.setProductQuantity((prev) => prev + 1);
  };

  const minusButton = () => {
    if (cart.productQuantity > 0) {
      cart.setProductQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className=" w-[30rem] mt-16">
      <h3 className="text-primary text-sm tracking-wide font-bold uppercase">
        Sneaker Company
      </h3>
      <h1 className="font-bold text-5xl pt-5 pb-7">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-darkGreyBlue leading-relaxed">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll wisthstand everything the
        weater can offer.
      </p>
      <div className="font-bold mt-8">
        <span className="text-[1.6rem] text-darkBlue mr-4">$125.00</span>
        <span className="text-primary bg-orange-100 p-1 rounded">50%</span>
        <p className="text-greyBlue font-bold line-through">$250.00</p>
      </div>
      <div className="flex font-bold items-center">
        <div className="bg-lightGreyBlue flex  items-center justify-center rounded my-8 mr-6 ">
          <button
            onClick={() => minusButton()}
            className="text-primary font-bold text-2xl leading-none px-4 py-[0.75rem]  hover:text-orange-300"
          >
            -
          </button>
          <p className="w-[3rem] mx-4 text-center">{cart.productQuantity}</p>
          <button
            onClick={() => addButton()}
            className="text-primary font-bold text-2xl leading-none px-4 py-[0.75rem] hover:text-orange-300 "
          >
            +
          </button>
        </div>
        <button>
          <div className="text-white bg-primary py-[0.75rem]  px-16 hover:bg-orange-300 rounded">
            <button
              onClick={() => cart.handleAddToCart()}
              className="flex  items-center justify-center"
            >
              <svg
                src={cartIcon}
                alt="Cart Icon"
                className="fill-white w-6 h-6 scale-75"
              >
                <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
              </svg>
              <p className="text-[0.8rem]">Add to cart</p>
            </button>
          </div>
        </button>
      </div>
    </div>
  );
};

export default InfoText;
