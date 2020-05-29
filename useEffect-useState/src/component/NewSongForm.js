import React, { useState } from "react";

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState("");

  const handleSubit = e => {
    e.preventDefault();
    addSong(title);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubit}>
      <label>Song Name:</label>
      <input
        type="text"
        value={title}
        required
        onChange={e => {
          setTitle(e.target.value);
        }}
      />
      <input type="submit" value="add song" />
    </form>
  );
};

export default NewSongForm;
