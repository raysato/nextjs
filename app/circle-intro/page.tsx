import MainVisual, { themes } from "../../components/MainVisual"
import CircleIntroContent from "../../components/CircleIntroContent"
import CircleSubTitle from "../../components/CircleSubtitle"
import CircleIntroTimeline from "../../components/CircleIntroTimeline"
import CircleIntroMember from "../../components/CircleIntroMember"
import CircleIntroAchievements from "../../components/CircleIntroAchievements"
import CircleIntroFAQ from "../../components/CircleIntroFAQ"


export default function CircleIntro() {

  const introData = {
    circle: {
      id: 1,
      account_id: 1,
      name: "サークル名",
      line_url: "lineurl",
      instagram_url: "instagramurl",
      twitter_url: "twitterurl",
      university: "大学名",
      drinking_power: 2,
      friends_power: 3,
      gachi_power: 5,
      love_power: 0,
      updatedAt: "2018-10-31 00:23:18.934519",
      member: 20,
      place: "場所",
      annual_cost: 3000,
      active_day: "毎週月曜",
      main_content: "",
      members: [
        {id: 1, img: "/", name: "サー田長男", explanation: "説明文説明文説明文説明文説明文説明文説明文"},
        {id: 2, img: "/", name: "副サー長子", explanation: "説明文説明文説明文説明文説明文説明文説明文"},
        {id: 3, img: "/", name: "モブ1", explanation: "説明文説明文説明文説明文説明文説明文説明文"},
        {id: 4, img: "/", name: "モブ2", explanation: "説明文説明文説明文説明文説明文説明文説明文"},
      ],
      achievement: [
        {id: 1, imgId: 1, achievement: "説明文説明文説明文説明文説明文説明文説明文"},
        {id: 2, imgId: 2, achievement: "説明文説明文説明文説明文説明文説明文説明文"},
        {id: 3, imgId: 3, achievement: "説明文説明文説明文説明文説明文説明文説明文"},
      ],
      qa: [
        {id: 1, question: "質問質問質問質問質問質問質問質問質問", answer: "回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答"},
        {id: 2, question: "質問質問質問質問質問質問質問質問質問", answer: "回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答"},
        {id: 3, question: "質問質問質問質問質問質問質問質問質問", answer: "回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答"},
      ],
      main_image: {},
      content_image: {},
      member_image: {},
    }
  }

    return (
      <>
        <MainVisual
          visualTheme={themes.visualTop}
        />
        <div className="w-10/12 mx-auto">
            <CircleIntroContent
              circleName={introData.circle.name}
              drinkingPower={introData.circle.drinking_power}
              friendsPower={introData.circle.friends_power}
              gachiPower={introData.circle.gachi_power}
              lovePower={introData.circle.love_power}
              member={introData.circle.member}
              place={introData.circle.place}
              annualCost={introData.circle.annual_cost}
              activeDay={introData.circle.active_day}
              
            />
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
              <CircleIntroMember
              members={introData.circle.members}
              />
            </div>
            <div className="divider"></div>
            <CircleSubTitle
                circleSubtitle="実績"
            />
            <div className="mt-8">
              <CircleIntroAchievements
              achievement={introData.circle.achievement}
              />
            </div>
            <div className="divider"></div>
            <CircleSubTitle
                circleSubtitle="よくある質問"
            />
            <div className="mt-8">
              <CircleIntroFAQ
              qa={introData.circle.qa}
              />
            </div>
        </div>
        
      </>
    )
  }