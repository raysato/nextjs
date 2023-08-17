import Badge from "./Badge";
import Tag from "./Tag";


export default function NewsContent() {
    return (
      <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-6">
        <div className="col-span-2 row-span-2 aspect-square relative">
            <a href="" className="">
                <div className="px-6 py-10 h-full flex items-end">
                    <img src="/file_005.jpeg" alt="" className="object-cover absolute top-0 left-0 w-full h-full rounded-2xl -z-10" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary rounded-2xl -z-10"></div>
                    <div className="absolute top-4 right-4">
                        <Badge />
                    </div>
                    <div className="">
                        <h4 className="text-white font-bold text-2xl">タイトル</h4>
                        <div className="flex mt-2">
                            <Tag />
                        </div>
                        <p className="text-white mt-2">テキストテキストテキストテキストテキストテキストテキストテキスト</p>
                    </div>
                </div>
            </a>
        </div>
        <div className="aspect-square relative">
            <a href="" className="">
                <div className="p-4 h-full flex items-end">
                    <img src="/file_005.jpeg" alt="" className="object-cover absolute top-0 left-0 w-full h-full rounded-2xl -z-10" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary rounded-2xl -z-10"></div>
                    <div className="absolute top-2 right-2">
                        <Badge />
                    </div>
                    <div className="">
                        <h4 className="text-white font-bold">タイトル</h4>
                        <div className="flex mt-1">
                            <Tag />
                        </div>
                        <p className="text-white mt-1 text-sm">テキストテキストテキストテキストテキスト</p>
                    </div>
                </div>
            </a>
        </div>
        <div className="aspect-square relative">
            <a href="" className="">
                <div className="p-4 h-full flex items-end">
                    <img src="/file_005.jpeg" alt="" className="object-cover absolute top-0 left-0 w-full h-full rounded-2xl -z-10" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary rounded-2xl -z-10"></div>
                    <div className="badge absolute top-2 right-2">新歓</div>
                    <div className="">
                        <h4 className="text-white font-bold">タイトル</h4>
                        <div className="flex mt-1">
                            <div className="px-2 py-1 bg-primary-content rounded-lg text-sm">タグ</div>
                        </div>
                        <p className="text-white mt-1 text-sm">テキストテキストテキストテキストテキスト</p>
                    </div>
                </div>
            </a>
        </div>
        <div className="aspect-square relative">
            <a href="" className="">
                <div className="p-4 h-full flex items-end">
                    <img src="/file_005.jpeg" alt="" className="object-cover absolute top-0 left-0 w-full h-full rounded-2xl -z-10" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary rounded-2xl -z-10"></div>
                    <div className="badge absolute top-2 right-2">新歓</div>
                    <div className="">
                        <h4 className="text-white font-bold">タイトル</h4>
                        <div className="flex mt-1">
                            <div className="px-2 py-1 bg-primary-content rounded-lg text-sm">タグ</div>
                        </div>
                        <p className="text-white mt-1 text-sm">テキストテキストテキストテキストテキスト</p>
                    </div>
                </div>
            </a>
        </div>
        <div className="aspect-square relative">
            <a href="" className="">
                <div className="p-4 h-full flex items-end">
                    <img src="/file_005.jpeg" alt="" className="object-cover absolute top-0 left-0 w-full h-full rounded-2xl -z-10" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary rounded-2xl -z-10"></div>
                    <div className="badge absolute top-2 right-2">新歓</div>
                    <div className="">
                        <h4 className="text-white font-bold">タイトル</h4>
                        <div className="flex mt-1">
                            <div className="px-2 py-1 bg-primary-content rounded-lg text-sm">タグ</div>
                        </div>
                        <p className="text-white mt-1 text-sm">テキストテキストテキストテキストテキスト</p>
                    </div>
                </div>
            </a>
        </div>
        
      </div>
    )
  }