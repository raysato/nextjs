"use client";
import { memo } from "react"
import { PiPlusLight } from "react-icons/pi"
import { PiPlusThin } from "react-icons/pi"
import { useFormContext, Controller, useFieldArray } from "react-hook-form"

const CircleMember = () => {

    const {control, formState: {errors}} = useFormContext()

    const {fields, append, remove} = useFieldArray({
        control,
        name: "memberList"
    })

    return (
      <div className="grid grid-cols-2 gap-x-16 gap-y-8">
        {fields.map((field, index) => {
            return (
            <div className="grid grid-cols-8 gap-x-8" key={field.id}>
                <label htmlFor="add-member" className="cursor-pointer bg-primary-content rounded-full aspect-square w-full block col-span-3 relative">
                    <input type="file" name="" id="add-member" className="hidden"/>
                    <PiPlusThin className="text-7xl text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </label>
                <div className="col-span-5">
                    <div className="">
                        <Controller
                            name={`memberList.${index}.memberName`}
                            control={control}
                            rules={{required: "名前は必須です"}}
                            render={({field}) => (<input type="text" placeholder="名前" id="memberName" className={`input input-bordered input-sm w-full ${errors.memberList?.[index]?.memberName && "input-error"}`} {...field}/>)}
                        />
                        <div className="text-error mt-1">{errors.memberList?.[index]?.memberName?.message as React.ReactNode}</div>
                        <Controller
                            name={`memberList.${index}.memberIntro`}
                            control={control}
                            rules={{required: "説明文は必須です"}}
                            render={({field}) => (<textarea className={`textarea textarea-bordered w-full mt-1 ${errors.memberList?.[index]?.memberIntro && "textarea-error"}`} placeholder="紹介文" id="memberIntroduction" {...field}/>)}
                        />
                        <div className="text-error">{errors.memberList?.[index]?.memberIntro?.message as React.ReactNode}</div>
                        <div className="ml-auto w-fit">
                            <button className="btn btn-circle btn-sm" onClick={() => remove(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>)
            })}
        {fields.length === 4 ||
            <button className="border-4 rounded-2xl border-dashed border-primary-content relative" onClick={() => append({memberName: "", memberIntro: ""})}>
                <div className="grid grid-cols-8 gap-x-8 w-full">
                    <div className="col-span-3 aspect-square w-full block"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary text-xl flex items-center"><PiPlusLight className="text-5xl mr-4" />メンバー追加</div>
            </button>
        }
      </div>
    )
  }

  export default memo(CircleMember)