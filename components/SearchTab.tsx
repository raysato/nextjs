"use client";

import { useState } from "react";

import Tag from "./Tag";

export default function SearchTab() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (num) => {
        setToggleState(num);
    }

    return (
        <div className="container px-12 py-16 bg-primary-light rounded-3xl shadow-lg mt-16">
            <div className="tabs">
                <a className={toggleState === 1 ? "tab tab-bordered tab-active" : "tab tab-bordered"} onClick={() => toggleTab(1)}>Tab 1</a> 
                <a className={toggleState === 2 ? "tab tab-bordered tab-active" : "tab tab-bordered"} onClick={() => toggleTab(2)}>Tab 2</a> 
                <a className={toggleState === 3 ? "tab tab-bordered tab-active" : "tab tab-bordered"} onClick={() => toggleTab(3)}>Tab 3</a>
            </div>
            <div className={toggleState === 1 ? "block" : "hidden"}>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="h-40 relative">
                        <a href="">
                            <img src="travel-nomades-JO19K0HDDXI-unsplash.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"/>
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-xl"></div>
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">テキスト</p>
                        </a>
                    </div>
                    <div className="h-40 relative">
                        <a href="">
                            <img src="travel-nomades-JO19K0HDDXI-unsplash.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"/>
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-xl"></div>
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">テキスト</p>
                        </a>
                    </div>
                    <div className="h-40 relative">
                        <a href="">
                            <img src="travel-nomades-JO19K0HDDXI-unsplash.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"/>
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-xl"></div>
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">テキスト</p>
                        </a>
                    </div>
                    
                </div>
                <div className="grid grid-cols-5 gap-4 mt-4">
                    <div className="h-40 relative">
                        <a href="">
                            <img src="travel-nomades-JO19K0HDDXI-unsplash.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"/>
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-xl"></div>
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">テキスト</p>
                        </a>
                    </div>
                    <div className="h-40 relative">
                        <a href="">
                            <img src="travel-nomades-JO19K0HDDXI-unsplash.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"/>
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-xl"></div>
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">テキスト</p>
                        </a>
                    </div>
                    <div className="h-40 relative">
                        <a href="">
                            <img src="travel-nomades-JO19K0HDDXI-unsplash.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"/>
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-xl"></div>
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">テキスト</p>
                        </a>
                    </div>
                    <div className="h-40 relative">
                        <a href="">
                            <img src="travel-nomades-JO19K0HDDXI-unsplash.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"/>
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-xl"></div>
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">テキスト</p>
                        </a>
                    </div>
                    <div className="h-40 relative">
                        <a href="">
                            <img src="travel-nomades-JO19K0HDDXI-unsplash.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"/>
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-xl"></div>
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">テキスト</p>
                        </a>
                    </div>
                    
                </div>
                <div className="mt-4 flex">
                    <Tag />
                </div>
            </div>
            <div className={toggleState === 2 ? "block" : "hidden"}>2</div>
            <div className={toggleState === 3 ? "block" : "hidden"}>3</div>
        </div>

    )
  }