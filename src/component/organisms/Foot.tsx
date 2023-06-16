import * as React from "react";
import "./foot.css";
import Parag from "../atom/Parag";
import Comment from "../atom/comment";
import Button from "../atom/Button";
import Logo from "../atom/Logo";
import { Facebook, Twitter, Instagram, Phone, ArrowUp } from "react-feather";

export default function App() {
  return (
    <div className="main-foot">
      <div className="remark">
        <div className="footer">
          <Logo text={"FOLA-EMPIRE"} />
          <Parag
            text={
              "TALK TO FOLA DESIGN ABOUT THE STYLE YOU HAVE IN MIND AND WE BRING IT TO LIGHT IN YOUR FACE"
            }
          />
          <Comment type={"Name"} placeholder={"Name..."} />
          <Comment type={"Email Address"} placeholder={"Email Address"} />
        </div>
        <div className="remark1">
        <Comment type={"comment"} placeholder={"comment"} />
        <Button text={"Submit"} />
        </div>
      </div>
      <div className="emoji">
        <p>
          <Facebook className="icon" />
        </p>
        <p>
          <Twitter className="icon" />
        </p>
        <p>
          <Instagram className="icon" />
        </p>
        <p>
          <Phone className="icon" />
        </p>
        <div>
          <p>
            <u>
              <ArrowUp className="icon" />
            </u>
          </p>
        </div>
      </div>
    </div>
  );
}
