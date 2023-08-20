// import { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import MainVisual, { mainVisuals, themes } from "../components/MainVisual";
import MainContent from "../components/MainContent";


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