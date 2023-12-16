import { BiSolidWine } from "react-icons/bi"
import { BsPeopleFill } from "react-icons/bs"
import { FaRunning } from "react-icons/fa"
import { BsSuitHeartFill } from "react-icons/bs"
import { HiUserGroup } from "react-icons/hi"
import { MdPlace } from "react-icons/md"
import { FaYenSign } from "react-icons/fa"
import { MdToday } from "react-icons/md"

export default function CircleIntroInfo({drinkingPower, friendsPower, gachiPower, lovePower, member, place, annualCost, activeDay}) {

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
                <div className="grid grid-cols-2" >
                    <p>飲み度</p>
                    <div className="flex">
                        {[...Array(drinkingPower)].map(() => (<BiSolidWine className="enabled-icon-style" />))}
                        {[...Array(5 - drinkingPower)].map(() => (<BiSolidWine className="disabled-icon-style" />))}
                    </div>
                </div>
                <div className="grid grid-cols-2 mt-4" >
                    <p>仲良し度</p>
                    <div className="flex">
                        {[...Array(friendsPower)].map(() => (<BsPeopleFill className="enabled-icon-style" />))}
                        {[...Array(5 - friendsPower)].map(() => (<BsPeopleFill className="disabled-icon-style" />))}
                    </div>
                </div>
                <div className="grid grid-cols-2 mt-4" >
                    <p>ガチ度</p>
                    <div className="flex">
                        {[...Array(gachiPower)].map(() => (<FaRunning className="enabled-icon-style" />))}
                        {[...Array(5 - gachiPower)].map(() => (<FaRunning className="disabled-icon-style" />))}
                    </div>
                </div>
                <div className="grid grid-cols-2 mt-4" >
                    <p>カップル度</p>
                    <div className="flex">
                        {[...Array(lovePower)].map(() => (<BsSuitHeartFill className="enabled-icon-style" />))}
                        {[...Array(5 - lovePower)].map(() => (<BsSuitHeartFill className="disabled-icon-style" />))}
                    </div>
                </div>
            </div>
            <div className="border-l">
                <div className="grid grid-rows-4 h-full ml-12">
                        <div className="border-b flex items-center">
                            <div className="flex items-center"><HiUserGroup className="text-2xl"/><p className="ml-4">人数</p>
                            </div>
                            <p className="ml-auto">{member}<span>人</span></p>
                        </div>
                        <div className="border-b flex items-center">
                            <div className="flex items-center"><MdPlace className="text-2xl"/><p className="ml-4">場所</p>
                            </div>
                            <p className="ml-auto">{place}</p>
                        </div>
                        <div className="border-b flex items-center">
                            <div className="flex items-center"><FaYenSign className="text-2xl"/><p className="ml-4">年間費用</p>
                            </div>
                            <p className="ml-auto">{annualCost}<span>円</span></p>
                        </div>
                        <div className="border-b flex items-center">
                            <div className="flex items-center"><MdToday className="text-2xl"/><p className="ml-4">活動日</p>
                            </div>
                            <p className="ml-auto">{activeDay}</p>
                        </div>
                </div>
            </div>
        </div>
    )
  }