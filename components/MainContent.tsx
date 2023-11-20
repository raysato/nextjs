import MainTitle from "./MainTitle";
import SubTitle from "./SubTitle";
import NewsContent from "./NewsContent";
import CircleContent from "./CircleContent";
import SearchTab from "./SearchTab";

export default function MainContent() {
    return (
      <div className="w-10/12 mx-auto">
        <MainTitle 
            title="サークル情報"
            titleEn="information"
        />

        <SubTitle 
            subtitle="新歓・ニュース情報"
        />

        <NewsContent />

        <SubTitle 
            subtitle="最近更新されたサークル"
        />

        <CircleContent />

        <SearchTab />

        <SubTitle 
            subtitle="サークル紹介"
        />

        <CircleContent />

      </div>
    )
  }