import React, { useState } from "react";
import "./toggleicon.scss";
import { Link } from "react-router-dom";
import photoicon from "../icon/photo.png";
import flowicon from "../icon/flow.png";

export const ToggleIcon = () => {
  const [selectedButton, setSelectedButton] = useState(1); // 初始选中第一个按钮

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };
  return (
    <div className="toggle-div">
      <Link to="/">
        <img src={photoicon} />
      </Link>
      <Link to="/flow">
        <img src={flowicon} />
      </Link>
    </div>
  );
};
