import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/14166670/pexels-photo-14166670.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
        <div className="userChatInfo">
          <span> Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
