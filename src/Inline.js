import React from "react";

const heading = {
  fontSize: "72px",
  color: "red",
};

function Inline() {
  return (
    <div>
        <h1 className='error'>ERROR</h1>
      <h1 style={heading}>Inline styling</h1>
    </div>
  );
}

export default Inline;
