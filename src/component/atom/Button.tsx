import * as React from "react";
import '../atom/button.css'

export interface IAppProps {
  text: string;
}

export default function App(props: IAppProps) {
  return (
    <div className="btn">
      <button>{props.text}</button>
    </div>
  );
}
