"use client";
import { useState } from "react";

export default function CircleTextInput() {

    const [memberTag, setMemberTag] = useState(0)

    const handleClick = (event) => {
        event.preventDefault()
        setMemberTag(memberTag + 1)
    }

    return (
      <div className="grid grid-cols-2 gap-x-16 gap-y-8">
        <div className="grid grid-cols-8 gap-x-8">
                <label htmlFor="add-member" className="cursor-pointer bg-primary-content rounded-full aspect-square w-full block col-span-3">
                    <input type="file" name="" id="add-member" className="hidden"/>
                </label>
                <div className="col-span-5">
                    <div className="grid grid-rows-3 gap-y-2">
                        <input type="text" placeholder="名前" className="input input-bordered w-full row-span-1" />
                        <textarea className="textarea textarea-bordered w-full row-span-2" placeholder="紹介文"></textarea>
                    </div>
                </div>
            </div>
        {[...Array(memberTag)].map(() => (
            <div className="grid grid-cols-8 gap-x-8">
                <label htmlFor="add-member" className="cursor-pointer bg-primary-content rounded-full aspect-square w-full block col-span-3">
                    <input type="file" name="" id="add-member" className="hidden"/>
                </label>
                <div className="col-span-5">
                    <div className="grid grid-rows-3 gap-y-2">
                        <input type="text" placeholder="名前" className="input input-bordered w-full row-span-1" />
                        <textarea className="textarea textarea-bordered w-full row-span-2" placeholder="紹介文"></textarea>
                    </div>
                </div>
            </div>
        ))}
        <button className="border-4 rounded-2xl border-dashed border-primary-content relative" onClick={handleClick}>
            <div className="grid grid-cols-8 gap-x-8 w-full">
                <div className="col-span-3 aspect-square w-full block"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary text-xl">メンバー追加</div>
        </button>
      </div>
    )
  }