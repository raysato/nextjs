"use client";

import { useState } from "react";

import Tag from "./Tag";

export default function SearchTab() {

    const [toggleState, setToggleState] = useState<number>(1);

    const toggleTab = (num: number) => {
        setToggleState(num);
    }

    interface genreType {
        genre: string, img: string, link: string
    }

    const mainGenre: genreType[] = [
        {genre: "サッカー", img: "travel-nomades-JO19K0HDDXI-unsplash.jpg", link: "/"},
        {genre: "サッカー", img: "travel-nomades-JO19K0HDDXI-unsplash.jpg", link: "/"},
        {genre: "サッカー", img: "travel-nomades-JO19K0HDDXI-unsplash.jpg", link: "/"},
    ]

    const subGenre: genreType[] = [
        {genre: "サッカー", img: "travel-nomades-JO19K0HDDXI-unsplash.jpg", link: "/"},
        {genre: "サッカー", img: "travel-nomades-JO19K0HDDXI-unsplash.jpg", link: "/"},
        {genre: "サッカー", img: "travel-nomades-JO19K0HDDXI-unsplash.jpg", link: "/"},
        {genre: "サッカー", img: "travel-nomades-JO19K0HDDXI-unsplash.jpg", link: "/"},
        {genre: "サッカー", img: "travel-nomades-JO19K0HDDXI-unsplash.jpg", link: "/"},
    ]

    return (
        <div className="container px-12 py-16 bg-primary-light rounded-3xl shadow-lg mt-16">
            <div className="tabs">
                <a className={`tab tab-bordered ${toggleState === 1 ? "tab-active" : ""}`} onClick={() => toggleTab(1)}>Tab 1</a> 
                <a className={`tab tab-bordered ${toggleState === 2 ? "tab-active" : ""}`} onClick={() => toggleTab(2)}>Tab 2</a> 
                <a className={`tab tab-bordered ${toggleState === 3 ? "tab-active" : ""}`} onClick={() => toggleTab(3)}>Tab 3</a>
            </div>
            <div className={toggleState === 1 ? "block" : "hidden"}>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    {mainGenre.map(({genre, img, link}, index) => (
                        <div className="h-40 relative" key={index}>
                            <a href={link}>
                                <img src={img} alt="" className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"/>
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-xl"></div>
                                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">{genre}</p>
                            </a>
                        </div>
                    ))}
                    
                </div>
                <div className="grid grid-cols-5 gap-4 mt-4">
                    {subGenre.map(({genre, img, link}, index) => (
                        <div className="h-40 relative" key={index}>
                            <a href={link}>
                                <img src={img} alt="" className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"/>
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-xl"></div>
                                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">{genre}</p>
                            </a>
                        </div>
                    ))}
                    
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