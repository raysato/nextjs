"use client"

interface introFAQType {
    id: number, question: string, answer: string
}

export default function CircleIntroFAQ() {

    const introFAQList: introFAQType[] = [
        {id: 1, question: "質問質問質問質問質問質問質問質問質問", answer: "回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答"},
        {id: 2, question: "質問質問質問質問質問質問質問質問質問", answer: "回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答"},
        {id: 3, question: "質問質問質問質問質問質問質問質問質問", answer: "回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答"},
    ]
    return (
      <div className="first:mt-0">
        {introFAQList.map((item) => {
            return (
                <div tabIndex={item.id} className="collapse bg-base-200 focus:bg-primary focus:text-white mt-4" key={item.id}>
                    <div className="collapse-title flex align-middle items-center">{item.question}</div>
                    <div className="collapse-content"> 
                        <div className="divider bg-primary-content m-0 h-px"></div>
                        <p className="mt-4">{item.answer}</p>
                    </div>
                </div>
            )
        })
        }
      </div>
    )
  }