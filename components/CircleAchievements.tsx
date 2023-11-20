"use client";
import { PiPlusLight } from "react-icons/pi"
import { PiPlusThin } from "react-icons/pi"
import { useFormContext, Controller, useFieldArray } from "react-hook-form"

export default function CircleAchievements() {

    const {control, formState: {errors}} = useFormContext()

    const {fields, append, remove} = useFieldArray({
        control,
        name: "AchievementList"
    })

    return (
      <div className="grid grid-cols-3 gap-x-24 gap-y-8">
        {fields.map((field, index) => (
            <div className="relative" key={field.id}>
                <button className="btn btn-circle btn-sm absolute right-0 top-0" onClick={() => remove(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <label htmlFor="add-achievement" className="cursor-pointer bg-primary-content rounded-full aspect-square block w-32 m-auto relative">
                    <input type="file" name="" id="add-achievement" className="hidden"/>
                    <PiPlusThin className="text-7xl text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </label>
                <Controller
                        name={`AchievementList.${index}.achievement`}
                        control={control}
                        rules={{required: "必須項目です"}}
                        render={({field}) => (<textarea className={`textarea textarea-bordered w-full mt-4 ${errors.AchievementList?.[index]?.achievement && "textarea-error"}`} placeholder="実績" {...field}></textarea>)}
                    />
                <div className="text-error">{errors.AchievementList?.[index]?.achievement?.message as React.ReactNode}</div>
            </div>
        ))}
        {fields.length === 3 ||
            <button className="border-4 rounded-2xl border-dashed border-primary-content relative" onClick={() => append({achievement: ""})}>
                <div className="grid grid-cols-8 gap-x-8 w-full">
                    <div className="col-span-5 aspect-square w-full block"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary text-xl"><PiPlusLight className="text-5xl mx-auto mb-1" />実績追加</div>
            </button>
        }
      </div>
    )
  }