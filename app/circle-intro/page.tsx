import MainVisual, { themes } from "../../components/MainVisual"
import CircleIntroContent from "../../components/CircleIntroContent"
import CircleSubTitle from "../../components/CircleSubtitle"
import CircleIntroTimeline from "../../components/CircleIntroTimeline"


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
            <div className="divider"></div>
            <CircleSubTitle
                circleSubtitle="イベントタイムライン"
            />
            <CircleIntroTimeline />
        </div>
        
      </>
    )
  }