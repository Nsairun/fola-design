import Image from "next/image";
import * as React from "react";
import Heading from "../atom/Heading";
import Parag from "../atom/Parag";
import "../organisms/outfit.css";
import pic3 from "../../images/WhatsApp Image 2023-06-13 at 21.35.50.jpg";


export default function App() {
  return (
    <div className="main">
      <Heading text={"OUR DESIGN TYPES"} />

      <div className="desc">
        <Image src={pic3} alt="" />

        <div className="col_2">
          <Heading text={"Description"} />
          <Parag
            text={
              "Welcome to our house of fashion african fabric. Navigate thru the store of very eye picking designs from the land of human origin ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi similique perspiciatis labore cumque optio repellat explicabo porro harum excepturi, corporis mollitia error quidem odio consequuntur maiores necessitatibus odit eos. Esse!"
            }
          />
        </div>

        <div className="size">
          <Heading text={"Size"} />
          <Parag text={"All sizes can be fabricated"} />
        </div>
      </div>
    </div>
  );
}
