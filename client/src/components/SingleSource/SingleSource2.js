import React from "react";
import Image from "react-image-enlarger";

const SingleSource = ({ src }) => {
  const [zoomed, setZoomed] = React.useState(false);

  // let style = {
  //   width: "350ox",
  //   height: "350px",
    
  // };

  return (
    <div className="zoom3">
      <Image
       
        zoomed={zoomed}
        src={src}
        onClick={() => setZoomed(true)}
        onRequestClose={() => setZoomed(false)}
       
      />
    </div>
  );
};

export default SingleSource;
