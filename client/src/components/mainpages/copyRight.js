import React from 'react';
;

const Copyright = () => {
    return (
      <div className="copy">
        <h3>
          {"Copyright @ "}{" "}
          <a href="https://thejonathanallison.com/home">
            Jonathan Allison {new Date().getFullYear()}
            {"."}
          </a>
        </h3>
      </div>
    );
}
export default Copyright;