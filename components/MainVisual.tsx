export const themes = {
    visualTop: {
      1: "/58787b52-38a8-4379-85c7-e61bb7f846c2.jpg",
      2: "/circle_img1.jpg",
      3: "/lead_img01.jpg",
    }
  }

export interface mainVisuals {
    1: string
    2: string
    3: string
}

export default function MainVisual({visualTheme}: {visualTheme: mainVisuals}) {
    const visualShow=""

    return (
      <div className="mt-6 relative main-visual overflow-hidden">
        <div className="absolute">
            <div className="main-visual__img-container rotate-3 shadow-2xl relative bg-white">
                <img src={visualTheme[1]} alt="" className="main-visual__img object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
        </div>
        <div className="absolute right-0">
            <div className="main-visual__img-container rotate-3 shadow-2xl relative bg-white">
                <img src={visualTheme[2]} alt="" className="main-visual__img object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="main-visual__img-container -rotate-3 shadow-2xl relative bg-white">
                <img src={visualTheme[3]} alt="" className="main-visual__img object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <p className={`absolute bottom-24 right-10 text-white text-8xl -rotate-12 main-visual__p ${visualShow}`}>わすれられない<br></br>おもいでを</p>
            </div>
        </div>
      </div>
    )
  }