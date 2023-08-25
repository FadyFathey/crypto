import React from "react";
import "./error.css";
const Error = ({ apiError }) => {
  return (
    <div class="section">
      <h1 class="error">Error</h1>
      <div class="page">Ooops!!! {apiError.message}</div>
      <a
        class="back-home"
        href="#!"
        onClick={() => {
          window.location.reload();
        }}
      >
        Please refresh the page
      </a>
    </div>
  );
};

export default Error;
