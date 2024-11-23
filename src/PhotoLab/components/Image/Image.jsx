import React from "react";

function Image({ src = "", alt = "" }) {
  return (
    <img
    //   style={{ height: "15rem", width: "10rem", margin: "1rem" }}
      src={src}
      alt={alt}
    />
  );
}

export default Image;
