import React, { useEffect } from "react";
import styles from "./ProfileArtist.module.css";
import { useNavigate, useParams } from "react-router-dom";
import data from "../Home/Components/Artists/data.json";

const ProfileArtist = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // useEffect hook to handle redirection
  useEffect(() => {
    if (!id) {
      navigate("/404");
    } else {
      const artistExists = data.artists.some((artist) => artist.name === id);
      if (!artistExists) {
        navigate("/404");
      }
    }
  }, [id, navigate]);

  const artist = data.artists.find(artist => artist.name === id);


  if (!artist) {
    return <div>Artist not found</div>;
  }

  
  if (!artist.work || artist.work.length === 0) {
    return <div>{artist.name} has no works available.</div>;
  }

  return (
    <div>
      {id}

      <h2>Work</h2>
      {artist.work.map((work, index) => (
        <div key={index}>
          <img src={work.img} alt={`Work ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ProfileArtist;
