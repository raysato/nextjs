"use client";
import { useState, useRef } from "react"

export default function CircleTimeline() {

    const [addTag, setAddTag] = useState<number>(0)

    const [inputTimeline, setInputTimeline] = useState<string>('')
    const [savedValues, setSavedValues] = useState<string[]>([])
    const inputRef = useRef<HTMLInputElement | null>(null)

    const [checkedIds, setCheckedIds] = useState<string[]>([])

    interface checkBoxType {
        id: string, key: string, ariaLabel: string
    }

    const checkBoxes: checkBoxType[] = [
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

    const checkedIdsNum: number[] = checkedIds.map(str => (parseInt(str)))
    const minCheckedIdsNum: string = "col-start-" + Math.min(...checkedIdsNum);
    console.log(minCheckedIdsNum)

    const handleCheckBoxChange = (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        if (checkedIds.includes(key)) {
            setCheckedIds(checkedIds.filter(item => item !== key))
        } else {
            setCheckedIds([...checkedIds, key])
        }
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setAddTag(addTag + 1);

        if (inputRef.current) {
            const inputValue = inputRef.current.value
            setSavedValues([...savedValues, inputValue])
            setInputTimeline('')
        }
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
                {savedValues.map((value, index) => (
                    <div className={`${minCheckedIdsNum} row-start-${index + 1} col-span-1`} key={index}>
                        <p className="whitespace-nowrap">{value}</p>
                        <div className="h-1 rounded-md bg-primary mt-1"></div>
                    </div>
                ))}
            </div>
            <div className="rounded-lg border border-base-300 px-4 py-5 mt-4 flex">
                <input type="text" placeholder="イベント名" className="input input-bordered w-full max-w-xs mr-4"
                value={inputTimeline}
                ref={inputRef}
                onChange={(e) => setInputTimeline(e.target.value)}
                />
                <div className="join">
                    {checkBoxes.map(({id, key, ariaLabel}) => (
                        <input className="join-item btn" type="checkbox" name="options" aria-label={ariaLabel} id={id} key={key} onChange={handleCheckBoxChange(key)} checked={checkedIds.includes(key)} />
                    ))}
                </div>
                <button className="btn btn-outline btn-primary ml-auto block"
                onClick={handleClick}
                >イベント追加</button>
            </div>
      </div>
    )
  }