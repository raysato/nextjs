import { BiSolidWine } from "react-icons/bi"
import { BsPeopleFill } from "react-icons/bs"
import { FaRunning } from "react-icons/fa"
import { BsSuitHeartFill } from "react-icons/bs"
import { HiUserGroup } from "react-icons/hi"
import { MdPlace } from "react-icons/md"
import { FaYenSign } from "react-icons/fa"
import { MdToday } from "react-icons/md"

export default function CircleIntroInfo() {

    const CircleParameter: CircleParameterType[] = [
        {value: "飲み度", margin: "", enabledIcon: <BiSolidWine className="enabled-icon-style" />, disabledIcon: <BiSolidWine className="disabled-icon-style" />, rate: 4, id: 1},
        {value: "仲良し度", margin: "mt-4", enabledIcon: <BsPeopleFill className="enabled-icon-style" />, disabledIcon: <BsPeopleFill className="disabled-icon-style" />, rate: 5, id: 2},
        {value: "ガチ度", margin: "mt-4", enabledIcon: <FaRunning className="enabled-icon-style" />, disabledIcon: <FaRunning className="disabled-icon-style" />, rate: 0, id: 3},
        {value: "カップル度", margin: "mt-4", enabledIcon: <BsSuitHeartFill className="enabled-icon-style" />, disabledIcon: <BsSuitHeartFill className="disabled-icon-style" />, rate: 1, id: 4},
    ]

    interface CircleParameterType {
        value: string, margin: string, enabledIcon: JSX.Element, disabledIcon: JSX.Element, rate: number, id: number
    }

    const CircleInfo: CircleInformationType[] = [
        {icon: <HiUserGroup className="text-2xl"/>, name:"人数", value: "120人", id: 1},
        {icon: <MdPlace className="text-2xl"/>, name:"場所", value: "12号館101号室", id: 2},
        {icon: <FaYenSign className="text-2xl"/>, name:"年間費用", value: "3000円", id: 3},
        {icon: <MdToday className="text-2xl"/>, name:"活動日", value: "毎週月曜日", id: 4},
    ]

    interface CircleInformationType {
        icon: JSX.Element, name: string, value: string, id: number
    }

    return (
        <div className="px-12 py-8 shadow-xl rounded-3xl border grid grid-cols-2 mt-10">
            <div className="">
                {CircleParameter.map((item) => (
                    <div className={`grid grid-cols-2 ${item.margin}`} key={item.id}>
                        <p>{item.value}</p>
                        <div className="flex">
                            {[...Array(item.rate)].map(() => (item.enabledIcon))}
                            {[...Array(5 - item.rate)].map(() => (item.disabledIcon))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="border-l">
                <div className="grid grid-rows-4 h-full ml-12">
                    {CircleInfo.map((item) => (
                        <div className="border-b flex items-center" key={item.id}>
                            <div className="flex items-center">{item.icon}<p className="ml-4">{item.name}</p>
                            </div>
                            <p className="ml-auto">{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
  }