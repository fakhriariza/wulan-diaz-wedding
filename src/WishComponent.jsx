import "./style.css";
import "animate.css";
import React from "react";

import bca from "./assets//bca.png";
import mandiri from "./assets//mandiri.png";
import bungaGift from "./assets//bungagift.png";
import bgfilter from "./assets/bgfilter.png";

import { useState } from "react";

function WishComponent({ data }) {
  const [text, setText] = useState("");

  return (
    <div className="background_wish">
      <img className="bgfilter" src={bgfilter}></img>
      <h1 className="title_wish">
        Wishes <br></br> & Words of Love
      </h1>
      <input
        className="input_wish"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
      />
      <h4 className="button_send">Send</h4>
      <div className="wish_list">
        {data.map((data) => (
          <div className="wish_item">
            <h4 className="name_wish">{data.title}</h4>
            <h4 className="time_wish">{data.time}</h4>
            <p className="wish">{data.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishComponent;
