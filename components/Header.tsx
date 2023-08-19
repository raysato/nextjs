"use client";
import { useRef, useState } from "react"

export default function Header() {
  const modal = useRef<HTMLDialogElement>(null)
  const [clickedTags, setClickedTags] = useState({
    tag1: false,
    tag2: false,
    tag3: false
  })
    return (
      <header className="py-4 w-10/12 flex items-center m-auto relative">
        <div className="flex">
          <img src="" alt="" className=""/>
          <p className="text-2xl font-bold text-primary">Unien</p>
        </div>
        <button
        className="rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left w-1/3 inline input input-bordered text-neutral-500"
        onClick={()=>{
          if (modal.current) {
            modal.current.showModal();
          }
        }}>サークル検索</button>
        <dialog ref={modal} id="my_modal_2" className="modal">
          <form method="dialog" className="modal-box">
              {
                Object.keys(clickedTags).map(key => {
                  return clickedTags[key] ? <span key={`tag${key}`}>{key}</span> : null
                })
              }
              <div>
                {
                  Object.keys(clickedTags).map(key => {
                    return <label key={`check${key}`} className="label cursor-pointer">
                    <input value={clickedTags[key]}
                      onChange={e => {
                        setClickedTags(() => {
                          const obj = {...clickedTags}
                          obj[key] = !obj[key]
                          return obj
                        })
                      }} 
                    type="checkbox" className="checkbox checkbox-primary" />
                    <span className="label-text">{ key }</span> 
                  </label>
                  })
                }
              </div>
          </form>
          <form method="dialog" className="modal-backdrop">
              <button>close</button>
          </form>
        </dialog>
        <div className="ml-auto">
            <button className="btn btn-primary rounded-full mr-2">サークル情報</button>
            <button className="btn btn-primary btn-outline rounded-full">新歓・ニュース</button>
        </div>
      </header>
    )
  }