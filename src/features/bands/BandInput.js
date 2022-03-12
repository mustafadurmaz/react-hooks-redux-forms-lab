import React, { useState } from "react";

function BandInput({onBandSubmit}) {
  const [name, setName] = useState("");


  function handleChange(event) {
    setName(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onBandSubmit(name);
    setName("");
  };
  return(
    <div>Band Input
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Band Name</label>
        <input id="name" value={name} onChange={handleChange} />
        <input type="submit" value="Add Band" />
      </form>
    </div>
  )
}

export default BandInput;
