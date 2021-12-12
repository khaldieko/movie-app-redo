import React from "react";
import { useParams } from "react-router";
import { moviesList } from "../MockData";

function Movieitem() {
  const { id } = useParams();

  const data = moviesList.filter((movie) => {
    return movie.id === Number(id);
  });
  console.log(data);
  return (
    <div>
      {id && (
        <div style={{display:'grid'}}>
          <h1 className='routerh1'>{data[0].title}</h1>
          <p className='description'>{data[0].description}</p>
          <iframe
          style={{marginLeft:'400px', borderRadius:'20px'}}
            width="700"
            height="415"
            src= {data[0].trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Movieitem;
