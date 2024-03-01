import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex w-screen h-36 justify-center mt-20 mb-10 bg-primary">
        <div className="w-5/6 my-10 py-10 border-t border-gray-500 text-center align-middle text-gray-500">
          <p>
            Copyright © {new Date().getFullYear()}
            <br />
            Hannah Beauty Ltd.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
