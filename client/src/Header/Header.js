import React from "react";
import CYF_Brand from"../Images/cyf_brand.png";

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <img className="logo pb-5" src={CYF_Brand} alt="CodeYourFuture logo" />
      </div>
    </div>
  )
};

export default Header;