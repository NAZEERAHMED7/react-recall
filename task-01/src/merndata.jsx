import React, { useEffect, useState } from "react";
import Mern from "./mern";
import Figma from "./figma";

const mernData = [
  {
    projectName: "Plan Your Trip",
    discription: "This is a booking website",
    tech: "MERN Stack",
  },
  {
    projectName: "Quran API",
    discription: "This is a Quran API webpage",
    tech: "MERN Stack",
  },
  {
    projectName: "Multi Vendor E-Commerce",
    discription: "This is an e-commerce website",
    tech: "MERN Stack",
  },
];

const figmaData = [
  {
    projectName: "Only Content Creators",
    discription: "This is a YouTube SEO website prototype",
    tech: "UI/UX",
  },
  {
    projectName: "Only Content Creators Mood Board",
    discription: "This is a YouTube SEO website moodboard",
    tech: "UI/UX",
  },
  {
    projectName: "Yum Feast",
    discription: "This is a food website prototype",
    tech: "UI/UX",
  },
  {
    projectName: "Multi vendor e-commerce",
    discription: "This is a multivendor E-commerce website prototype",
    tech: "UI/UX"
  }
];

const Data = () => {
  const [activeChoice, setActiveChoice] = useState("mern");

  const handleChoice = (choice) => {
    setActiveChoice(choice);
  };

  useEffect(()=>{},[activeChoice])
  return (
    <div>
      <button onClick={() => handleChoice("mern")}>MERN Data</button>
      <button onClick={() => handleChoice("figma")}>Figma Data</button>

      {activeChoice === "mern" && (
        <p>
          {mernData.map((mern, index) => (
            <Mern key={index} {...mern} />
          ))}
        </p>
      )}

      {activeChoice === "figma" && (
        <p>
          {figmaData.map((figma, index) => (
            <Figma key={index} {...figma} />
          ))}
        </p>
      )}
    </div>
  );
};

export default Data;
