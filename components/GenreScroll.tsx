"use client"

import { useState, useRef, useEffect } from "react"

import { IconContext } from "react-icons"
import { link } from 'fs'
import { genreList } from "../circle-data/GenreData"
import { BiChevronLeft } from 'react-icons/bi'
import { BiChevronRight } from 'react-icons/bi'

export default function GenreScroll() {

    const scrollBarRef = useRef<HTMLDivElement>(null)
    const [isHidden, setIsHidden] = useState<boolean>(false)

    const [isScrollable, setIsScrollable] = useState<boolean>(false);

    const handleRight = () => {
        scrollBarRef.current ? scrollBarRef.current.scroll({left: scrollBarRef.current.scrollLeft + 500, behavior: "smooth"}) : null
    }
    const handleLeft = () => {
        scrollBarRef.current ? scrollBarRef.current.scroll({left: scrollBarRef.current.scrollLeft - 500, behavior: "smooth"}) : null
    }

    const handleScroll = () => {
        if (scrollBarRef.current) {
            const scrollState = scrollBarRef.current.scrollLeft
            setIsHidden(scrollState > 0)

            const {scrollWidth, scrollLeft, clientWidth} = scrollBarRef.current
            setIsScrollable(scrollWidth - scrollLeft <= clientWidth)
        }
    }

    return (
      <div className="w-10/12 m-auto overflow-x-visible">
        <div className="flex relative">
            <div className="absolute h-full w-10 bg-background -left-8">
                <button className={`border rounded-full p-2 w-fit h-fit ${!isHidden ? "hidden" : ""}`} onClick={handleLeft}>
                    <BiChevronLeft className="text-xl" />
                </button>
            </div>
            <div className="flex overflow-x-scroll whitespace-nowrap scroll-smooth hidden-scrollbar" ref={scrollBarRef} onScroll={handleScroll}>
                    {genreList.map(({icon, genre, link}, index) => (
                        <div className="mr-2 w-24 flex-shrink-0" key={index}>
                            <a href={link}>
                                {icon}
                                <h4 className="text-Neutral-500 text-xs font-bold mt-2 text-center">{genre}</h4>
                            </a>
                        </div>
                    ))}
            </div>
            <div className="absolute h-full w-10 bg-background -right-8">
                <button className={`border rounded-full p-2 w-fit h-fit ${isScrollable ? "hidden" : ""}`} onClick={handleRight}>
                    <BiChevronRight className="text-xl" />
                </button>
            </div>
        </div>
      </div>
    )
  }