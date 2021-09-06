import React from 'react';
;

const Copyright = () => {
  return (
  
      <div className="copy">
        <h5>
          {"Copyright @ "}{" "}
          <a href="https://thejonathanallison.com/home">
            Jonathan Allison {new Date().getFullYear()}
            {"."}
          </a>
        </h5>
      </div>
      
    );
}
export default Copyright;