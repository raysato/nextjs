"use client";

export default function Header() {
    return (
      <header className="py-4 w-10/12 flex items-center m-auto relative">
        <div className="flex">
          <img src="" alt="" className=""/>
          <p className="text-2xl font-bold text-primary">Unien</p>
        </div>
        <button
        className="rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left w-1/3 inline input input-bordered text-neutral-500"
        onClick={()=>{
          if (document) {
            (document.getElementById('my_modal_2') as HTMLFormElement).showModal();
          }
        }}>サークル検索</button>
        <dialog id="my_modal_2" className="modal">
          <form method="dialog" className="modal-box">
              <div>

              </div>
          </form>
          <form method="dialog" className="modal-backdrop">
              <button>close</button>
          </form>
        </dialog>
        <div className="ml-auto">
            <button className="btn btn-primary rounded-full mr-2">サークル情報</button>
            <button className="btn btn-primary btn-outline rounded-full">新歓・ニュース</button>
        </div>
      </header>
    )
  }