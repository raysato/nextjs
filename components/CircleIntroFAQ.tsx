"use client"

interface introFAQType {
    id: number, question: string, answer: string
}

export default function CircleIntroFAQ({qa}) {

    const introFAQList: introFAQType[] = [
        
    ]
    return (
      <div className="first:mt-0">
        {qa.map((item) => {
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