export default function Footer() {
    return (
      <footer className="mx-4 mt-32">
        <div className="grid lg:grid-cols-2 gap-4">
            <div className="h-64 relative rounded-2xl">
                <a href="">
                    <img src="/circle_img_01_170910003743_IMG_7787_sfSqqm.jpeg" alt="" className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"/>
                    <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-50 rounded-2xl"></div>
                    <div className="absolute top-1/2 left-1/2 w-11/12 h-5/6 transform -translate-x-1/2 -translate-y-1/2 border rounded-2xl flex items-center justify-center">
                        <div className="text-center">
                            <p className="text-white font-bold text-xl">サークル登録はこちらから</p>
                            <button className="btn text-center mt-2">詳しく見る</button>
                        </div>
                    </div>
                </a>
            </div>
            <div className="h-64 relative rounded-2xl">
                <a href="">
                    <img src="/circle_img_01_170910003743_IMG_7787_sfSqqm.jpeg" alt="" className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"/>
                    <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-50 rounded-2xl"></div>
                    <div className="absolute top-1/2 left-1/2 w-11/12 h-5/6 transform -translate-x-1/2 -translate-y-1/2 border rounded-2xl flex items-center justify-center">
                        <div className="text-center">
                            <p className="text-white font-bold text-xl">サークル登録はこちらから</p>
                            <button className="btn text-center mt-2">詳しく見る</button>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <div className="w-full h-72 bg-primary my-4 rounded-2xl grid grid-cols-5 text-white p-10">
            <div className="col-span-2 p-8">
                <div className="">
                    <div className="flex">
                        <img src="" alt="" />
                        <p className="text-3xl">Unien</p>
                    </div>
                    <p className="text-sm">テキストテキストテキストテキストテキストテキスト</p>
                </div>
            </div>
            <div className="">
                <p className="font-bold">このサイトについて</p>
                <div className="mt-4 flex flex-col text-primary-content text-sm">
                    <ul>
                        <li><a href="" className="link link-hover">プライバシーポリシー</a></li>
                        <li className="mt-1"><a href="" className="link link-hover">利用規約</a></li>
                        <li className="mt-1"><a href="" className="link link-hover"></a></li>
                    </ul>
                </div>
            </div>
            <div className="col-span-2">
                <p className="font-bold">ジャンルから探す</p>
                <div className="mt-4 flex text-primary-content text-sm">
                    <ul className="mr-24">
                        <li className=""><a href="" className="link link-hover">サッカー</a></li>
                        <li className="mt-1"><a href="" className="link link-hover">サッカー</a></li>
                        <li className="mt-1"><a href="" className="link link-hover">サッカー</a></li>
                        <li className="mt-1"><a href="" className="link link-hover">サッカー</a></li>
                        <li className="mt-1"><a href="" className="link link-hover">サッカー</a></li>
                        <li className="mt-1"><a href="" className="link link-hover">サッカー</a></li>
                        <li className="mt-1"><a href="" className="link link-hover">サッカー</a></li>
                    </ul>
                    <ul>
                        <li><a href="" className="link link-hover">サッカー</a></li>
                        <li className="mt-1"><a href="" className="link link-hover">サッカー</a></li>
                        <li className="mt-1"><a href="" className="link link-hover">サッカー</a></li>
                        <li className="mt-1"><a href="" className="link link-hover">サッカー</a></li>
                        <li className="mt-1"><a href="" className="link link-hover">サッカー</a></li>
                        <li className="mt-1"><a href="" className="link link-hover">サッカー</a></li>
                        <li className="mt-1"><a href="" className="link link-hover">サッカー</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </footer>
    )
  }