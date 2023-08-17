export default function SubTitle({subtitle}) {

    return (
      <div className="mt-16">
        <div className="flex">
            <h3 className="text-2xl font-bold">{subtitle}</h3>
            <button className="btn btn-ghost rounded-full font-normal ml-auto w-48 inline text-left">もっと見る</button>
        </div>
        <div className="h-1 w-full bg-primary-content relative">
            <div className="absolute left-0 top-0 h-full w-1/6 bg-primary"></div>
        </div>
      </div>
    )
  }