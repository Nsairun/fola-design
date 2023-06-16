"use client";

import * as React from "react";
import Button from "../atom/Button";
import Image from "next/image";
import "./swipe.css";
import Pics from "../../pics.json";
import photo from "../../images/THE NSAI CLICK.jpg";
import photo2 from '../../images/WhatsApp Image 2023-06-13 at 12.07.44.jpg'
import photo3 from '../../images/WhatsApp Image 2023-06-13 at 21.35.50.jpg'

const imageStyle = {
width: "94vw",
height: "95vh",
cursor: "pointer",
borderRadius: "20px",
maxWidth: "fit-content",
maxHeight: "fit-content"
}



export default function Swipe({}) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const arrImages = [photo, photo2, photo3];

  const dotSwipe = (picsIndex: any) => {
    setCurrentIndex(picsIndex);
  };

  const goToPrevious = () => {
    const isFirstSwipe = currentIndex === 0;
    const newIndex = isFirstSwipe ? Pics.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSwipe = currentIndex === Pics.length - 1;
    const newIndex = isLastSwipe ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="swipe">
      <div className="mainBtn">
      <Button text={"Prev"} swipeFunction={goToPrevious} />
      {/* <Image
        className="pic1"
        src={photo}
        alt={"image"}
      /> */}
      <Image
        className="pic2"
        src={arrImages[currentIndex]}
        alt={"image"}
        style={imageStyle}
        
      />
      {/* 
      <Image
        className="pic1"
        src={Pics[0].image}
        alt={"image"}
      /> */}
      <Button text={"Next"} swipeFunction={goToNext} />
      </div>
      <div className="dots-container">
        {Pics.map((pics, picsIndex) => (
          <div
            className="dots"
            key={picsIndex}
            onClick={() => dotSwipe(picsIndex)}
          >
            .
          </div>
        ))}
      </div>
    </div>
  );
}
