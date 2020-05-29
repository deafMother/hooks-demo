import React, { useState, useEffect } from "react";
import uuid from "uuid";
import NewSongForm from "./NewSongForm.js";

/* 
        Note the component rerenders only  if the value of a particular state changes
*/

const SongList = () => {
  // set the imitial state
  const [songs, setSongs] = useState([
    { title: "lost mind", id: 1 },
    { title: "no faith", id: 2 },
    { title: "sucidal dreams", id: 3 }
  ]);
  const [age, setAge] = useState(20);

  // life cycle hook
  //we can have multiple useEffect
  useEffect(() => {
    console.log(songs.length);
  }, [songs]); // useEffect runs  only if the provided value(s) in array  is changed
  useEffect(() => {
    console.log(age);
  }, [age]); // useEffect runs  only if the provided value(s) in array  is changed

  // helper function
  const addSong = title => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        {"Age is " + age}
      </button>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;
