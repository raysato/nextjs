"use client";
import { useState, useRef } from "react"

export default function CircleTimelineTest() {

    const [inputTimeline, setInputTimeline] = useState('')
    const [addEvent, setAddEvent] = useState<string[]>([])
    const inputRef = useRef<HTMLInputElement | null>(null)

    const [checkedIds, setCheckedIds] = useState<string[]>([])

    const checkBoxes = [
        {id: "checkbox1", key: "1", ariaLabel: "4"},
        {id: "checkbox2", key: "2", ariaLabel: "5"},
        {id: "checkbox3", key: "3", ariaLabel: "6"},
        {id: "checkbox4", key: "4", ariaLabel: "7"},
        {id: "checkbox5", key: "5", ariaLabel: "8"},
        {id: "checkbox6", key: "6", ariaLabel: "9"},
        {id: "checkbox7", key: "7", ariaLabel: "10"},
        {id: "checkbox8", key: "8", ariaLabel: "11"},
        {id: "checkbox9", key: "9", ariaLabel: "12"},
        {id: "checkbox10", key: "10", ariaLabel: "1"},
        {id: "checkbox11", key: "11", ariaLabel: "2"},
        {id: "checkbox12", key: "12", ariaLabel: "3"},
    ]

    const checkedIdsNum = checkedIds.map(str => (parseInt(str)))
    const minCheckedIdsNum = "col-start-" + Math.min(...checkedIdsNum);
    console.log(minCheckedIdsNum)

    const handleCheckBoxChange = (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setCheckedIds((checkedIds) => {
                const newAddCheck = [...checkedIds, key]
                return newAddCheck
                }
            )
        } else {
            setCheckedIds(checkedIds.filter(item => item !== key))
        }
    }

    const handleClick = (event) => {
        event.preventDefault();
        setAddEvent((AddEvent) => {
            const newAddEvent = [...AddEvent, inputTimeline]
            return newAddEvent
        })

        if (inputRef.current) {
            inputRef.current.focus();
        }

        setInputTimeline('')

        console.log(checkedIds);
    }

    return (
      <div className="">
            <div className="grid grid-cols-12 gap-0.5 text-white">
                <div className="bg-primary p-2 text-center rounded-tl-lg">4</div>
                <div className="bg-primary p-2 text-center">5</div>
                <div className="bg-primary p-2 text-center">6</div>
                <div className="bg-primary p-2 text-center">7</div>
                <div className="bg-primary p-2 text-center">8</div>
                <div className="bg-primary p-2 text-center">9</div>
                <div className="bg-primary p-2 text-center">10</div>
                <div className="bg-primary p-2 text-center">11</div>
                <div className="bg-primary p-2 text-center">12</div>
                <div className="bg-primary p-2 text-center">1</div>
                <div className="bg-primary p-2 text-center">2</div>
                <div className="bg-primary p-2 text-center rounded-tr-lg">3</div>
            </div>
            <div className="mt-4 grid grid-cols-12">
                {addEvent.map((value, index) => (
                    <div className={`${minCheckedIdsNum} row-start-${index + 1} col-span-1`} key={value}>
                        <p className="whitespace-nowrap">{value}</p>
                        <div className="h-1 rounded-md bg-primary mt-1"></div>
                    </div>
                ))}

            </div>
            <div className="rounded-lg border border-base-300 px-4 py-5 mt-4 flex">
                <input type="text" placeholder="イベント名" className="input input-bordered w-full max-w-xs mr-4"
                value={inputTimeline}
                onChange={(e) => setInputTimeline(e.target.value)}
                ref={inputRef}
                />
                <div className="join">
                    {checkBoxes.map(({id, key, ariaLabel}) => (
                        <input className="join-item btn" type="checkbox" name="options"
                        aria-label={ariaLabel}
                        id={id}
                        key={key}
                        onChange={handleCheckBoxChange(key)}
                        checked={checkedIds.includes(key)} />
                    ))}
                </div>
                <button className="btn btn-outline btn-primary ml-auto block"
                onClick={handleClick}
                >イベント追加</button>
            </div>
      </div>
    )
  }