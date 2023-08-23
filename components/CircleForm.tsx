import CircleTitle from "./CircleTitle"
import CircleSubTitle from "./CircleSubtitle"
import CircleTextInput from "./CircleTextInput"
import CircleSelectInput from "./CircleSelectInput"

export default function CircleForm() {

    return (
        <div className="w-10/12 mx-auto">
            <form action="">
                <CircleTitle
                circleTitle="サークル紹介入力"
                />
                <CircleSubTitle
                    circleSubtitle="SNSリンク"
                />
                <div className="mt-8">
                    <div className="grid grid-cols-2 gap-x-16">
                        <CircleTextInput
                            TextLabel="line-link"
                            CircleTextLabel="ライン"
                            TextPlaceholder="ライン"
                        />
                        <CircleTextInput
                            TextLabel="instagram-link"
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
                            TextLabel="circle-name"
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
                    <div className="grid grid-cols-5 gap-x-24 mt-8">
                        <CircleSelectInput
                            SelectLength="short"
                            SelectLabel="univ-name"
                            CircleSelectLabel="大学名"
                            SelectPlaceholder="1"
                        />
                        <CircleSelectInput
                            SelectLength="short"
                            SelectLabel="univ-name"
                            CircleSelectLabel="大学名"
                            SelectPlaceholder=""
                        />
                        <CircleSelectInput
                            SelectLength="short"
                            SelectLabel="univ-name"
                            CircleSelectLabel="大学名"
                            SelectPlaceholder=""
                        />
                        <CircleSelectInput
                            SelectLength="short"
                            SelectLabel="univ-name"
                            CircleSelectLabel="大学名"
                            SelectPlaceholder=""
                        />
                        <CircleSelectInput
                            SelectLength="short"
                            SelectLabel="univ-name"
                            CircleSelectLabel="大学名"
                            SelectPlaceholder=""
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-x-16 gap-y-8 mt-8">
                        <CircleTextInput
                            TextLabel="circle-name"
                            CircleTextLabel="サークル名"
                            TextPlaceholder="サークル名"
                        />
                        <CircleTextInput
                            TextLabel="circle-name"
                            CircleTextLabel="サークル名"
                            TextPlaceholder="サークル名"
                        />
                        <CircleTextInput
                            TextLabel="circle-name"
                            CircleTextLabel="サークル名"
                            TextPlaceholder="サークル名"
                        />
                        <CircleTextInput
                            TextLabel="circle-name"
                            CircleTextLabel="サークル名"
                            TextPlaceholder="サークル名"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
  }