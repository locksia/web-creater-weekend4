import React, { useState } from "react";

const Riomaggiore = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div className="w3-content">
        <div className="w3-row w3-margin">
          <div className="w3-third">
            <img src="./img/img_riomaggiore.jpg" style={{ width: "100%", minHeight: "200px" }} />
          </div>
          <div className="w3-twothird w3-container">
            <h2>Riomaggiore</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Riomaggiore;
