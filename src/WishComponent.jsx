import "./style.css";
import "animate.css";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MotionImage from "./MotionImage";
import api from "./api";
import bungaGift from "./assets/bungagift.png";
import bgfilter from "./assets/bgfilter.png";

function WishComponent({ data, invitationId }) {
  const [text, setText] = useState("");
  const [wishList, setWishList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchWishes = async () => {
    try {
      const res = await api.get("/guests/wishes");
      setWishList(res.data);
    } catch (err) {
      console.error("Failed to load wishes", err);
      if (err.response?.status === 404) {
        console.warn("API returned 404 - fallback to static data");
        setWishList(data);
      } else {
        // Handle semua error lain (misal: undefined response, network error)
        console.warn("Unexpected error or no response from server");
        setWishList(data);
      }
    }
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  const handleSend = async () => {
    if (!text.trim()) return;
    setLoading(true);
    try {
      const res = await api.post(`/guests/wishes/${invitationId}`, {
        wishes: text,
      });

      if (res.status === 200) {
        alert("Wish sent!");
        setText("");
        fetchWishes(); // Refresh list
      } else {
        alert("Failed to send wish");
      }
    } catch (err) {
      console.error("Error sending wish", err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="background_wish">
      <MotionImage className="bgfilter" src={bgfilter} alt="Background" />

      <motion.h1
        className="title_wish"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Wishes <br /> & Words of Love
      </motion.h1>

      <motion.textarea
        className="input_wish"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Give Your Wish!"
        rows={4}
        style={{ resize: "none", overflow: "hidden" }}
        onInput={(e) => {
          e.target.style.height = "auto"; // Reset height
          e.target.style.height = `${e.target.scrollHeight}px`; // Auto-grow
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      <motion.button
        className="button_send"
        onClick={handleSend}
        disabled={loading}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {loading ? "Sending..." : "Send"}
      </motion.button>

      <motion.div
        className="wish_list"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {wishList.map((item, index) => (
          <motion.div
            key={item.id}
            className="wish_item"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h4 className="name_wish">{item.title}</h4>
            <h4 className="time_wish">
              {new Date(item.time).toLocaleString()}
            </h4>
            <p className="wish">{item.message}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default WishComponent;
