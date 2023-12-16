"use client";
import CircleTitle from "./CircleTitle"
import CircleSubTitle from "./CircleSubtitle"
import CircleTextInput from "./CircleTextInput"
import CircleSelectInput from "./CircleSelectInput"
import CircleTimelineTest from "./CircleTimelineTest"
import CircleTimeline from "./CircleTimeline"
import CircleMember from "./CircleMember"
import CircleAchievements from "./CircleAchievements"
import CircleFAQ from "./CircleFAQ"
import { useForm, FormProvider } from "react-hook-form"
import CircleMainContent from "./CircleMainContent";

export default function CircleForm() {

    const useFormMethods = useForm({
        mode: "onChange",
        defaultValues: {
            memberName: "",
            memberIntro: "",
            lineLink: "",
            instagramLink: "",
            circleName: "",
            circlePeople: "",
            circlePlace: "",
            circleFee: "",
            circleDay: "",
        }
    })
    const {handleSubmit, reset} = useFormMethods


    const onSubmit = (SubmitArticle) => {
        console.log(SubmitArticle)
        reset()
    }

    return (
        <div className="w-10/12 mx-auto">
            <FormProvider {...useFormMethods}>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <CircleTitle
                    circleTitle="サークル紹介入力"
                    />
                    <CircleSubTitle
                        circleSubtitle="SNSリンク"
                    />
                    <div className="mt-8">
                        <div className="grid grid-cols-2 gap-x-16">
                            <CircleTextInput
                                TextLabel="lineLink"
                                CircleTextLabel="ライン"
                                TextPlaceholder="ライン"
                            />
                            <CircleTextInput
                                TextLabel="instagramLink"
                                CircleTextLabel="インスタグラム"
                                TextPlaceholder="インスタグラム"
                            />
                        </div>
                    </div>
                    <CircleSubTitle
                        circleSubtitle="特徴・基本情報"
                    />
                    <div className="mt-8">
                        <div className="grid grid-cols-2 gap-x-16">
                            <CircleTextInput
                                TextLabel="circleName"
                                CircleTextLabel="サークル名"
                                TextPlaceholder="サークル名"
                            />
                            <CircleSelectInput
                                SelectLength="wide"
                                SelectLabel="univ-name"
                                CircleSelectLabel="大学名"
                                SelectPlaceholder="大学名"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-x-24 mt-8">
                            <CircleSelectInput
                                SelectLength="short"
                                SelectLabel="drink-num"
                                CircleSelectLabel="飲み度"
                                SelectPlaceholder="1"
                            />
                            <CircleSelectInput
                                SelectLength="short"
                                SelectLabel="friend-num"
                                CircleSelectLabel="仲良し度"
                                SelectPlaceholder=""
                            />
                            <CircleSelectInput
                                SelectLength="short"
                                SelectLabel="serious-num"
                                CircleSelectLabel="ガチ度"
                                SelectPlaceholder=""
                            />
                            <CircleSelectInput
                                SelectLength="short"
                                SelectLabel="couple-num"
                                CircleSelectLabel="カップル度"
                                SelectPlaceholder=""
                            />
                
                        </div>
                        <div className="grid grid-cols-2 gap-x-16 gap-y-8 mt-8">
                            <CircleTextInput
                                TextLabel="circlePeople"
                                CircleTextLabel="人数"
                                TextPlaceholder="人数"
                            />
                            <CircleTextInput
                                TextLabel="circlePlace"
                                CircleTextLabel="場所"
                                TextPlaceholder="場所"
                            />
                            <CircleTextInput
                                TextLabel="circleFee"
                                CircleTextLabel="年間費用"
                                TextPlaceholder="年間費用"
                            />
                            <CircleTextInput
                                TextLabel="circleDay"
                                CircleTextLabel="活動日"
                                TextPlaceholder="活動日"
                            />
                        </div>
                    </div>
                    <CircleSubTitle
                        circleSubtitle="メインコンテンツ"
                    />
                    <div className="mt-8">
                        <CircleMainContent />
                    </div>
                    <CircleSubTitle
                        circleSubtitle="イベントタイムライン"
                    />
                    <div className="mt-8">
                        <CircleTimelineTest />
                    </div>
                    <CircleSubTitle
                        circleSubtitle="メンバー紹介"
                    />
                    <div className="mt-8">
                       <CircleMember />
                    </div>
                    <CircleSubTitle
                        circleSubtitle="実績"
                    />
                    <div className="mt-8">
                        <CircleAchievements />
                    </div>
                    <CircleSubTitle
                        circleSubtitle="よくある質問"
                    />
                    <div className="mt-8">
                        <CircleFAQ />
                    </div>
                    <div className="flex justify-center"><button type="submit" className="btn btn-primary mt-12 rounded-full">サークル紹介を作成</button></div>
                </form>
            </FormProvider>
        </div>
    )
  }