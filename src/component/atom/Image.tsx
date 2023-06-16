import * as React from "react";
import "./image.css";
import Image from "next/image";

export interface IAppProps {
  src: string;
  alt: string;
  image: any;
}

export default function App(props: IAppProps) {
  return (
    <div className="img">
      <Image className = 'image'src={props.src} alt={props.alt} height={48} width={48} />
    </div>
  );
}
