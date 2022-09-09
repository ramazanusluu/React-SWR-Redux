import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div className="container">
      <div className="loading">
        {/* <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div> */}
        <div className="loader"></div>
      </div>
    </div>
  );
}

export default Loading;
