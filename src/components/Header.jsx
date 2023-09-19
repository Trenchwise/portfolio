import React from "react";

const Header = () => {
  return (
    <>
      <div id="headerContainer">
        <div className="nameTitle">
          <h1>Tanya French</h1>
        </div>
        <div id="navBarItemsWrapper">
          <div className="navBarItems">
            <p>Work</p>
          </div>
          <div className="navBarItems">
            <p>Contact</p>
          </div>
          <div className="navBarItems">
            <p>About</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
