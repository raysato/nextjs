"use client";
import { useState } from "react"

export default function CircleFAQ() {

    const [addFAQ, setAddFAQ] = useState(0)

    const handleClick = (event) => {
        event.preventDefault()
        setAddFAQ(addFAQ + 1)
    }

    return (
      <div className="">
          <div className="rounded-lg border border-base-300 px-4 py-5 mt-4 flex flex-col">
            <input type="text" placeholder="質問" className="input input-bordered w-full" />
            <textarea className="textarea textarea-bordered mt-2" placeholder="回答"></textarea>
          </div>
          {[...Array(addFAQ)].map(() => (
            <div className="rounded-lg border border-base-300 px-4 py-5 mt-4 flex flex-col">
                <input type="text" placeholder="質問" className="input input-bordered w-full" />
                <textarea className="textarea textarea-bordered mt-2" placeholder="回答"></textarea>
            </div>
          ))}
          <button className="border-4 rounded-2xl border-dashed border-primary-content relative w-full h-32 mt-4" onClick={handleClick}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary text-xl">質問・回答追加</div>
          </button>
      </div>
    )
  }