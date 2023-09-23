import MainVisual, { themes } from "../../components/MainVisual"
import CircleIntroContent from "../../components/CircleIntroContent"
import CircleSubTitle from "../../components/CircleSubtitle"


export default function CircleIntro() {
    return (
      <>
        <MainVisual 
          visualTheme={themes.visualTop}
        />
        <div className="w-10/12 mx-auto">
            <CircleIntroContent />
            <CircleSubTitle
                circleSubtitle="タイトル"
            />
            
        </div>
        
      </>
    )
  }