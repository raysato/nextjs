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