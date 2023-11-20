import MainVisual, { themes } from "../../components/MainVisual"
import CircleIntroContent from "../../components/CircleIntroContent"
import CircleSubTitle from "../../components/CircleSubtitle"
import CircleIntroTimeline from "../../components/CircleIntroTimeline"
import CircleIntroMember from "../../components/CircleIntroMember"
import CircleIntroAchievements from "../../components/CircleIntroAchievements"
import CircleIntroFAQ from "../../components/CircleIntroFAQ"


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
            <div className="mt-8">
              <CircleIntroTimeline />
            </div>
            <div className="divider"></div>
            <CircleSubTitle
                circleSubtitle="メンバー紹介"
            />
            <div className="mt-8">
              <CircleIntroMember />
            </div>
            <div className="divider"></div>
            <CircleSubTitle
                circleSubtitle="実績"
            />
            <div className="mt-8">
              <CircleIntroAchievements />
            </div>
            <div className="divider"></div>
            <CircleSubTitle
                circleSubtitle="よくある質問"
            />
            <div className="mt-8">
              <CircleIntroFAQ/>
            </div>
        </div>
        
      </>
    )
  }