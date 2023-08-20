// import { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import MainVisual, { mainVisuals } from "../components/MainVisual";
import MainContent from "../components/MainContent";

const themes = {
  visualTop: {
    1: "/58787b52-38a8-4379-85c7-e61bb7f846c2.jpg",
    2: "/circle_img1.jpg",
    3: "/lead_img01.jpg",
  }
}

export default function Page() {
  return (
    <>

      <MainVisual 
        visualTheme={themes.visualTop}
      />

      <MainContent />


    </>
    

  )
}