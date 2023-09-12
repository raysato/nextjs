"use client";
import { useState } from "react"
import { PiPlusLight } from "react-icons/pi"

export default function CircleAchievements() {

    const [addAchievement, setAddAchievement] = useState(0)

    const handleClick = (event) => {
        event.preventDefault()
        setAddAchievement(addAchievement + 1)
    }

    return (
      <div className="grid grid-cols-3 gap-x-24 gap-y-8">
        <div className="">
            <label htmlFor="add-achievement" className="cursor-pointer bg-primary-content rounded-full aspect-square block w-32 m-auto">
                <input type="file" name="" id="add-achievement" className="hidden"/>
            </label>
            <textarea className="textarea textarea-bordered w-full mt-4" placeholder="実績"></textarea>
        </div>
        {[...Array(addAchievement)].map(() => (
            <div className="">
                <label htmlFor="add-achievement" className="cursor-pointer bg-primary-content rounded-full aspect-square block w-32 m-auto">
                    <input type="file" name="" id="add-achievement" className="hidden"/>
                </label>
                <textarea className="textarea textarea-bordered w-full mt-4" placeholder="実績"></textarea>
            </div>
        ))}
        <button className="border-4 rounded-2xl border-dashed border-primary-content relative" onClick={handleClick}>
            <div className="grid grid-cols-8 gap-x-8 w-full">
                <div className="col-span-5 aspect-square w-full block"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary text-xl"><PiPlusLight className="text-5xl mx-auto mb-1" />実績追加</div>
        </button>
      </div>
    )
  }