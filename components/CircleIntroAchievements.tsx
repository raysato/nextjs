"use client"

export default function CircleIntroAchievements({achievement}) {

    const imgIDIdentifier = (imgId: number): string => {
        const imgIdList = {
            1: "/58787b52-38a8-4379-85c7-e61bb7f846c2.jpg",
            2: "/B558EE23-FB74-4EEA-A776-510DA40FC8F8.jpeg",
            3: "/large-115b54e6dd0aafbc6d986263dfb822280748f795179f0450930f5f06be14fe63.jpg"
        }
        return imgIdList[imgId]
    }

    return (
        <div className="grid grid-cols-3 gap-x-8">
            {achievement.map((item) => {
                return (
                    <div className="" key={item.id}>
                        <img src={imgIDIdentifier(item.imgId)} alt="" className="object-cover w-36 h-36 mx-auto" />
                        <p className="font-bold mt-4">{item.achievement}</p>
                    </div>
                )
            })}
        </div>
    )
  }