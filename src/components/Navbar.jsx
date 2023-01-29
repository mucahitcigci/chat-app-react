import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">My Chat App</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/9821105/pexels-photo-9821105.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
