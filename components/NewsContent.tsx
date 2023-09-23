import Badge, { badgeThemes } from "./Badge";
import Tag from "./Tag";
import { NewsData } from "../circle-data/NewsData"

export default function NewsContent() {

    const NewsFirstData = NewsData.find((_, index) => index <= 0) || {title: "initial", content: "initial", link: "initial", img: "initial", id: "initial", badge: "initial"}
    const NewsSubData = NewsData.slice(1, 5)

    return (
      <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-6">
        <div className="col-span-2 row-span-2 aspect-square relative">
                <a href={NewsFirstData.link} className="">
                    <div className="px-6 py-10 h-full flex items-end">
                        <img src={NewsFirstData.img} alt="" className="object-cover absolute top-0 left-0 w-full h-full rounded-2xl -z-10" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary rounded-2xl -z-10"></div>
                        <div className="absolute top-4 right-4">
                            <Badge badgeTheme={NewsFirstData.badge} />
                        </div>
                        <div className="">
                            <h4 className="text-white font-bold text-2xl">{NewsFirstData.title}</h4>
                            <div className="flex mt-2">
                                <Tag />
                            </div>
                            <p className="text-white mt-2">{NewsFirstData.content}</p>
                        </div>
                    </div>
                </a>
        </div>
        {NewsSubData.map((item) => (
            <div className="aspect-square relative">
                <a href={item.link} className="">
                    <div className="p-4 h-full flex items-end">
                        <img src={item.img} alt="" className="object-cover absolute top-0 left-0 w-full h-full rounded-2xl -z-10" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary rounded-2xl -z-10"></div>
                        <div className="absolute top-2 right-2">
                            <Badge badgeTheme={item.badge}/>
                        </div>
                        <div className="">
                            <h4 className="text-white font-bold">{item.title}</h4>
                            <div className="flex mt-1">
                                <Tag />
                            </div>
                            <p className="text-white mt-1 text-sm">{item.content}</p>
                        </div>
                    </div>
                </a>
            </div>
            ))}
        
      </div>
    )
  }