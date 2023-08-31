export default function CircleSubTitle({circleSubtitle}) {

    return (
      <div className="mt-12 flex items-center">
        <div className="bg-primary w-1.5 h-10 mr-4"></div>
        <h3 className="text-2xl">{circleSubtitle}</h3>
      </div>
    )
  }