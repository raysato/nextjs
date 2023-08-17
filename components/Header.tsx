export default function Header() {
    return (
      <header className="py-4 container flex items-center m-auto relative">
        <div className="flex">
          <img src="" alt="" className=""/>
          <p className="text-2xl font-bold text-primary">Unien</p>
        </div>
        <input type="text" placeholder="サークルを検索する" className="input input-bordered max-w-xs rounded-full mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full" />
        <div className="ml-auto">
            <button className="btn btn-primary rounded-full mr-2">サークル情報</button>
            <button className="btn btn-primary btn-outline rounded-full">新歓・ニュース</button>
        </div>
      </header>
    )
  }