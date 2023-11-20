"use client";

interface introMemberType {
    id: number, img: string, name: string, explanation: string
}

export default function () {

    const introMemberList: introMemberType[] = [
        {id: 1, img: "/", name: "サー田長男", explanation: "説明文説明文説明文説明文説明文説明文説明文"},
        {id: 2, img: "/", name: "副サー長子", explanation: "説明文説明文説明文説明文説明文説明文説明文"},
        {id: 3, img: "/", name: "モブ1", explanation: "説明文説明文説明文説明文説明文説明文説明文"},
        {id: 4, img: "/", name: "モブ2", explanation: "説明文説明文説明文説明文説明文説明文説明文"},
    ]
    
    return (
        <div className="grid grid-cols-2 gap-x-16 gap-y-8">
        {introMemberList.map((item) => {
            return (
            <div className="grid grid-cols-8 gap-x-8" key={item.id} >
                <img src={item.img} alt="" className="rounded-full aspect-square w-full col-span-3 bg-gray-100">
                </img>
                <div className="col-span-5">
                    <div className="">
                        <p className="text-lg font-bold">{item.name}</p>
                        <p className="text-sm mt-2">{item.explanation}</p>
                    </div>
                </div>
            </div>
            )
            })}
      </div>
    )
}