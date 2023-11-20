"use client"
import { MainData } from "../circle-data/MainData"
import Badge, {badgeThemes} from "./Badge"
import Tag from "./Tag"
import { useEffect, useState } from "react"

export default function SearchResultContents() {

    const [data, setData] = useState<{albumId: number,id: number, title: string, url: string, thumbnailUrl: string}[]>([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
        .then((res) => {
            return res.json()
        })
        .then((data) => setData(data))
    }, [])
    console.log(data)

    return (
      <div className="w-10/12 mx-auto mt-8">
          <div className="grid grid-cols-4 grid-rows-2 gap-4 text-sm mt-4">
            {data.map((item) =>
                (<a href={item.url} className="" key={item.id}>
                    <div className="relative">
                        <img src={item.thumbnailUrl} alt="" className="aspect-square object-cover rounded-xl"/>
                        <div className="absolute top-2 right-2">
                            {/* <Badge badgeTheme={item.badge}/> */}
                        </div>
                    </div>
                    <h4 className="font-bold mt-1">{item.title}</h4>
                    <div className="flex mt-1">
                        <Tag />
                    </div>
                    <p className="text-neutral-500">{item.title}</p>
                </a>)
                )}
          </div>
      </div>
    )
  }