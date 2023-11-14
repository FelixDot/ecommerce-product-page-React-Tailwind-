import { useState, useRef } from "react";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import ImageContainer from "./ImageContainer";
import close from "../assets/images/icon-close.svg";

const Lightbox = ({
  firstImage,
  bigImage,
  images,
  setLightbox,
  setSelectedImage,
}) => {
  const [currImage, setCurrImage] = useState(firstImage);
  return (
    <div className="absolute top-0 left-0 w-screen h-screen z-20 bg-black bg-opacity-80 flex items-center justify-center ">
      <div className="relative flex flex-col items-center justify-center">
        <button
          className="float-right "
          onClick={() => setLightbox((prev) => !prev)}
        >
          <svg
            src={close}
            alt=""
            className="absolute w-6 h-5 my-3 top-[-3rem] right-0 fill-darkGreyBlue hover:fill-primary"
          >
            <path
              className="scale-150 "
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            />
          </svg>
        </button>

        <div className="flex justify-center items-center relative">
          <button className=" m-[-1rem]">
            <div className="flex justify-center items-center bg-white  pr-6 p-5 rounded-full stroke-black hover:stroke-primary">
              <svg width="13" height="18">
                <path
                  d="M11 1 3 9l8 8"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </button>
          <div>
            <img
              src={currImage}
              alt=""
              className="w-[34rem] rounded-2xl relative -z-30 "
            />
            <div className="flex justify-between mt-7 w-[34rem]">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrImage(bigImage.at(index))}
                >
                  <img
                    src={image}
                    alt=""
                    className="cursor-pointer hover:opacity-60  hover:border-2 hover:border-primary transition-opacity rounded-[15px] bg-black h-[5.5rem]"
                  />
                </button>
              ))}
            </div>
          </div>

          <button className=" m-[-1rem] ">
            <div className="flex justify-center items-center bg-white  pl-6 p-5 rounded-full stroke-black hover:stroke-primary">
              <svg width="13" height="18" className="hover:stroke-primary">
                <path
                  d="m2 1 8 8-8 8"
                  strokeWidth="3"
                  fill="#fff"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Lightbox;
