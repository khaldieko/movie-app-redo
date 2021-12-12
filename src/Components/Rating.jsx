import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { React, useState } from "react";

function Rating({ handlerate, rating }) {
  const [hover, sethover] = useState(null);
  console.log(rating, "rating.js")
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingNumber = i + 1;
        return (
          <label key={`star${i}`}>
            <input
              type="radio" 
              style={{display:"none", cursor:"pointer"}}
              value={ratingNumber}
              onClick={() => {
                handlerate(ratingNumber);
              }}
            />
            <AiOutlineStar
              onMouseEnter={() => {
                sethover(ratingNumber);
              }}
              onMouseLeave={() => {
                sethover(null);
              }}
              color={ratingNumber <= (hover || rating) ? "#f00" : "#ddd"}
            />
          </label>
        );
      })}
    </div>
  );
}

export default Rating;
