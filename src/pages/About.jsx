import React, { useState, useEffect } from "react";

import ownerImg from "../assets/images/owner.jpg";
import award1Img from "../assets/images/award1.jpg";
import award2Img from "../assets/images/award2.jpg";
import kitchen1Img from "../assets/images/kitchen1.jpg";
import kitchen2Img from "../assets/images/kitchen2.jpg";
import kitchen3Img from "../assets/images/kitchen3.jpg";

function About() {
  const [data, setData] = useState({
    story: "",
    awards: [],
    images: [],
    loaded: false,
  });

  useEffect(() => {
    const fetchData = () => {
      const result = {
        story:
          "Our restaurant started as a small kitchen with a big dream to serve quality food.",

        awards: [
          { id: 1, title: "Best Restaurant Award 2023", img: award1Img },
          { id: 2, title: "Hygiene Excellence Award", img: award2Img },
        ],

        images: [kitchen1Img, kitchen2Img, kitchen3Img],
      };

      setData({ ...result, loaded: true });
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",   // ✅ center horizontally
        textAlign: "center",    // ✅ text center
        padding: "20px",
        fontFamily: "Arial",
      }}
    >

      {/* Story */}
      <h1>Our Story</h1>
      <p style={{ maxWidth: "600px" }}>{data.story}</p>

      {/* Founder */}
      <h2>Founder</h2>
      <img
        src={ownerImg}
        alt="Owner"
        style={{
          width: "150px",
          borderRadius: "50%",
          marginBottom: "10px",
        }}
      />
      <p>Founder & Chef</p>

      {/* Kitchen Gallery */}
      <h2>Kitchen Gallery</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",  // ✅ horizontal center
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        {data.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="kitchen"
            style={{
              width: "150px",
              borderRadius: "10px",
            }}
          />
        ))}
      </div>

      {/* Awards */}
      <h2>Awards & Achievements</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",  // ✅ center awards
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {data.awards.map((award) => (
          <div key={award.id} style={{ textAlign: "center" }}>
            <img
              src={award.img}
              alt={award.title}
              style={{
                width: "120px",
                borderRadius: "10px",
              }}
            />
            <p>{award.title}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default About;