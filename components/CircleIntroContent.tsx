import CircleIntroInfo from "./CircleIntroInfo"
import CircleTitle from "./CircleTitle"

export default function CircleIntroContent() {

    return (
        <div className="">
            <CircleTitle
            circleTitle="サークル名"
            />
            <div className="text-Neutral-500 mt-4">最終更新日： <span>2022/4/1</span></div>
            <CircleIntroInfo/>
        </div>
    )
  }