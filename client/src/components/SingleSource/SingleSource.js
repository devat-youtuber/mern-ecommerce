import React from "react";
import Image from "react-image-enlarger";

const SingleSource = ({ src }) => {
  const [zoomed, setZoomed] = React.useState(false);

  let style = {
    width:"250ox",
    height: "250px",
    display: "flex",
    
  }

  return (
    <div className="zoom">
      <Image
       style={style}
        zoomed={zoomed}
        src={src}
        onClick={() => setZoomed(true)}
        onRequestClose={() => setZoomed(false)}
        onError={(event) => (event.target.style.display = "none")}
      />
    </div>
  );
};

export default SingleSource;
