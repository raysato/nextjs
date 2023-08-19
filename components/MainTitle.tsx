export default function MainTitle({title, titleEn}) {
    return (
      <div className="relative mt-32">
        <p className="text-6xl text-primary-content absolute transform left-1/2 -translate-x-1/2 -top-8 -z-10 main-title-en">{titleEn}</p>
        <h2 className="text-4xl text-primary font-bold text-center">{title}</h2>
      </div>
    )
  }