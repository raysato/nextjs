import Badge, { badgeThemes } from "./Badge";
import Tag from "./Tag";
import { MainData } from "../circle-data/MainData";

export default function CircleContent() {

    const SlicedMainData = MainData.slice(0, 9)
    
    return (
      <div className="grid grid-cols-4 grid-rows-2 gap-4 text-sm mt-4">
        {SlicedMainData.map((item) => (
            <a href={item.link} className="">
                <div className="relative">
                    <img src={item.img} alt="" className="aspect-square object-cover rounded-xl"/>
                    <div className="absolute top-2 right-2">
                        <Badge badgeTheme={item.badge}/>
                    </div>
                </div>
                <h4 className="font-bold mt-1">{item.title}</h4>
                <div className="flex mt-1">
                    <Tag />
                </div>
                <p className="text-neutral-500">{item.content}</p>
            </a>
        ))}
      </div>
    )
  }