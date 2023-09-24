"use client";
import { useRef, useState } from "react"

export default function Header() {
  const modal = useRef<HTMLDialogElement>(null)
  const [toggleState, setToggleState] = useState<number>(1)

  interface tagsType {
    check: boolean,
    id: number,
    genre: string
  }

  const initialTag: tagsType[] = [{check: false, id: 1, genre: "tag1"}, {check: false, id: 2, genre: "tag2"}, {check: false, id: 3, genre: "tag3"}, {check: false, id: 4, genre: "tag4"}, {check: false, id: 5, genre: "tag5"}, {check: false, id: 6, genre: "tag6"}, {check: false, id: 7, genre: "tag7"}, {check: false, id: 8, genre: "tag8"}, {check: false, id: 9, genre: "tag9"}, {check: false, id: 10, genre: "tag10"}, {check: false, id: 11, genre: "tag11"}, {check: false, id: 12, genre: "tag12"}]
  const [clickedTags, setClickedTags] = useState(initialTag)

  const initialTag2: tagsType[] = [{check: false, id: 1, genre: "tag1"}, {check: false, id: 2, genre: "tag2"}, {check: false, id: 3, genre: "tag3"}, {check: false, id: 4, genre: "tag4"}, {check: false, id: 5, genre: "tag5"}, {check: false, id: 6, genre: "tag6"}, {check: false, id: 7, genre: "tag7"}, {check: false, id: 8, genre: "tag8"}, {check: false, id: 9, genre: "tag9"}, {check: false, id: 10, genre: "tag10"}, {check: false, id: 11, genre: "tag11"}, {check: false, id: 12, genre: "tag12"}]
  const [clickedTags2, setClickedTags2] = useState(initialTag2)

  const toggleTab = (num: number) => {
    setToggleState(num)
  }

  const handleCheck = (id: number) => {
    setClickedTags((prevClickedTags) => {
      return prevClickedTags.map((prevTags) => {
        if (prevTags.id === id) {
          const updatedTag = {...prevTags, check: !prevTags.check}
          return updatedTag
        }
        return prevTags
      })
    })
    console.log(clickedTags)
  }

  const handleCheck2 = (id: number) => {
    setClickedTags2((prevClickedTags) => {
      return prevClickedTags.map((prevTags) => {
        if (prevTags.id === id) {
          const updatedTags = {...prevTags, check: !prevTags.check}
          return updatedTags
        }
        return prevTags
      })
    })
    console.log(clickedTags2)
  }

  const handleClear = () => {
    setClickedTags((prevItems) => {
      return prevItems.map((prevTags) => {
        const updatedTag = {...prevTags, check: false}
        return updatedTag
      })
    })
    setClickedTags2((prevItems) => {
      return prevItems.map((prevTags) => {
        const updatedTag = {...prevTags, check: false}
        return updatedTag
      })
    })
  }

  const checkedTags = clickedTags.filter(item => item.check)

    return (
      <header className="py-4 w-10/12 flex items-center m-auto relative">
        <a href="/" className="flex">
          <img src="" alt="" className=""/>
          <p className="text-2xl font-bold text-primary">Unien</p>
        </a>
        <button
        className="rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left w-1/3 inline input input-bordered text-neutral-500"
        onClick={()=>{
          if (modal.current) {
            modal.current.showModal();
          }
        }}>サークル検索</button>
        <dialog ref={modal} id="my_modal_2" className="modal">
          <form method="dialog" className="modal-box max-w-2xl">
              <div className="input input-bordered rounded-full grid grid-cols-3 relative h-16 p-1">
                {/* <div className="absolute h-2/3 right-0 w-px bg-neutral-300 left-1/3 top-1/2 translate -translate-y-1/2"></div> */}
                {/* <div className="absolute h-2/3 right-0 w-px bg-neutral-300 left-2/3 top-1/2 translate -translate-y-1/2"></div> */}
                <div className="col-span-2 grid grid-cols-2 p-1 bg-base-200 rounded-full">
                  <a className={`relative overflow-x-scroll hidden-scrollbar flex items-center rounded-full px-2 ${toggleState === 1 ? "tab-active bg-primary" : ""}`} onClick={() => toggleTab(1)}>
                  {checkedTags.length === 0 && toggleState === 1 ? <p className="absolute text-white font-bold text-sm left-4">ジャンルを選択</p> : null}
                    {clickedTags.map(item => {
                        return item.check ? <span key={item.id} className="px-3 py-1 rounded-full bg-primary-content text-primary text-sm mr-1">{item.genre}</span> : null
                      })}
                  </a>
                  <a className={`overflow-x-scroll hidden-scrollbar flex items-center rounded-full px-2 ${toggleState === 2 ? "tab-active bg-primary" : ""}`} onClick={() => toggleTab(2)}>
                    {clickedTags2.map(item => {
                        return item.check ? <span key={item.id} className="px-3 py-1 rounded-full bg-primary-content text-primary text-sm mr-1">{item.genre}</span> : null
                      })}
                  </a>
                </div>
                <input type="text" placeholder="キーワード検索" className="outline-none pl-3 rounded-full" />
              </div>
              <div className="mt-6">
                <div className={`grid grid-cols-4 ${toggleState === 1 ? "" : "hidden"}`}>
                  {clickedTags.map(item => {
                      return <label key={item.id} className="label cursor-pointer justify-start">
                      <input value={item.genre}
                        onChange={() => handleCheck(item.id)}
                        checked={item.check}
                      type="checkbox" className="checkbox checkbox-primary" />
                      <div className="label-text ml-4 text-Neutral-500">{item.genre}</div>
                    </label>
                    })}
                </div>
                <div className={`grid grid-cols-4 ${toggleState === 2 ? "" : "hidden"}`}>
                  {clickedTags2.map(item => {
                      return <label key={item.id} className="label cursor-pointer justify-start">
                      <input value={item.genre}
                        onChange={() => handleCheck2(item.id)}
                        checked={item.check}
                      type="checkbox" className="checkbox checkbox-primary" />
                      <div className="label-text ml-4 text-Neutral-500">{item.genre}</div>
                    </label>
                    })}
                </div>
              </div>
              <div className="h-px bg-neutral-300 w-full my-4"></div>
              <div className="flex">
                <a className="btn" onClick={handleClear}>全てクリア</a>
                <button className="btn btn-primary rounded-full ml-auto block">検索</button>
              </div>
          </form>
          <form method="dialog" className="modal-backdrop">
              <button>close</button>
          </form>
        </dialog>
        <div className="ml-auto">
            <a className="btn btn-primary rounded-full mr-2">サークル情報</a>
            <button className="btn btn-primary btn-outline rounded-full">新歓・ニュース</button>
        </div>
      </header>
    )
  }