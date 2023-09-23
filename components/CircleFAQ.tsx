"use client";
import { useFieldArray, useFormContext, Controller } from "react-hook-form";
import { PiPlusLight } from "react-icons/pi"

export default function CircleFAQ() {

    const {control, formState: {errors}} = useFormContext()

    const {fields, append, remove} = useFieldArray({
        control,
        name: "FAQList"
    })

    return (
      <div className="">
          {fields.map((field, index) => (
            <div className="rounded-lg border border-base-300 px-4 py-5 mt-4 flex flex-col" key={field.id}>
                <Controller
                    name={`FAQList.${index}.FAQQuestion`}
                    control={control}
                    rules={{required: "必須項目です"}}
                    render={({field}) => (<input type="text" placeholder="質問" className={`input input-bordered w-full ${errors.FAQList?.[index]?.FAQQuestion && "input-error"}`} {...field}/>)}
                />
                <div className="text-error mt-1">{errors.FAQList?.[index]?.FAQQuestion.message as React.ReactNode}</div>
                <Controller
                    name={`FAQList.${index}.FAQAnswer`}
                    control={control}
                    rules={{required: "必須項目です"}}
                    render={({field}) => (<textarea className={`textarea textarea-bordered mt-2 ${errors.FAQList?.[index]?.FAQAnswer && "textarea-error"}`} placeholder="回答" {...field}></textarea>)}
                />
                <div className="text-error mt-1">{errors.FAQList?.[index]?.FAQAnswer.message as React.ReactNode}</div>
                <div className="ml-auto w-fit">
                    <button className="btn btn-circle btn-sm" onClick={() => remove(index)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>
          ))}
          {fields.length === 5 ||
            <button className="border-4 rounded-2xl border-dashed border-primary-content relative w-full h-32 mt-4" onClick={() => append({FAQQuestion: "", FAQAnswer: ""})}>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary text-xl flex items-center"><PiPlusLight className="text-5xl mr-4" />質問・回答追加</div>
            </button>
          }
      </div>
    )
  }