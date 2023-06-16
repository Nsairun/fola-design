import * as React from "react";
import '../atom/button.css'

export interface IAppProps {
  text: string;
  swipeFunction?: () => void;
}

export default function App(props: IAppProps) {
  return (
    <div className="btn">
      <button onClick={props.swipeFunction}>{props.text}</button>
    </div>
  );
}
