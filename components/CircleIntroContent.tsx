import CircleIntroInfo from "./CircleIntroInfo"
import CircleTitle from "./CircleTitle"

export default function CircleIntroContent({circleName, drinkingPower, friendsPower, gachiPower, lovePower, member, place, annualCost, activeDay}) {

    return (
        <div className="">
            <CircleTitle
            circleTitle={circleName}
            />
            <div className="text-Neutral-500 mt-4">最終更新日： <span>2022/4/1</span></div>
            <CircleIntroInfo
            drinkingPower={drinkingPower}
            friendsPower={friendsPower}
            gachiPower={gachiPower}
            lovePower={lovePower}
            member={member}
            place={place}
            annualCost={annualCost}
            activeDay={activeDay}
            />
        </div>
    )
  }