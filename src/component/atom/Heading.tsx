import * as React from "react";
import "./heading.css";
export interface IAppProps {
  text: string;
}

export default function App(props: IAppProps) {
  return <h1 className="heading">{props.text}</h1>;
  return (
    <div className="heading">
      <h1>{props.text}</h1>
    </div>
  );
}
