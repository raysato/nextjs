"use client";

export default function ({members}) {
    
    return (
        <div className="grid grid-cols-2 gap-x-16 gap-y-8">
        {members.map((item) => {
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