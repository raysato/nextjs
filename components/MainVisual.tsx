export default function MainVisual() {
    return (
      <div className="mt-6 relative main-visual">
        <div className="absolute">
            <div className="main-visual__img-container rotate-3 shadow-2xl relative bg-white">
                <img src="/58787b52-38a8-4379-85c7-e61bb7f846c2.jpg" alt="" className="main-visual__img object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
        </div>
        <div className="absolute right-0">
            <div className="main-visual__img-container rotate-3 shadow-2xl relative bg-white">
                <img src="/circle_img1.jpg" alt="" className="main-visual__img object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="main-visual__img-container -rotate-3 shadow-2xl relative bg-white">
                <img src="/lead_img01.jpg" alt="" className="main-visual__img object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <p className="absolute bottom-4 right-6 text-white text-9xl -rotate-12">わすれられないおもいでを</p>
            </div>
        </div>
      </div>
    )
  }