import React, { useState } from "react";
import image1 from "../assets/images/image-product-1.jpg";
import image2 from "../assets/images/image-product-2.jpg";
import image3 from "../assets/images/image-product-3.jpg";
import image4 from "../assets/images/image-product-4.jpg";
import image1Thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import image2Thumbnail from "../assets/images/image-product-2-thumbnail.jpg";
import image3Thumbnail from "../assets/images/image-product-3-thumbnail.jpg";
import image4Thumbnail from "../assets/images/image-product-4-thumbnail.jpg";
import Lightbox from "./Lightbox";
const images = [
  image1Thumbnail,
  image2Thumbnail,
  image3Thumbnail,
  image4Thumbnail,
];

const bigImage = [image1, image2, image3, image4];
const ImageContainer = () => {
  const [selectedImage, setSelectedImage] = useState(image1);
  const [lightbox, setLightbox] = useState(false);

  return (
    <div className="h-[28rem] w-[28rem]  shrink-0">
      <img
        className="rounded-[15px]"
        src={selectedImage}
        alt=""
        onClick={() => window.innerWidth > 768 && setLightbox(true)}
      />
      <div className="flex justify-between mt-7">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(bigImage.at(index))}
          >
            <img
              src={image}
              alt=""
              className="cursor-pointer hover:opacity-60  hover:border-2 hover:border-primary transition-opacity rounded-[15px] bg-black h-[5.5rem]"
            />
          </button>
        ))}
      </div>
      {lightbox && (
        <Lightbox
          firstImage={selectedImage}
          images={images}
          bigImage={bigImage}
          setLightbox={setLightbox}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
};

export default ImageContainer;
