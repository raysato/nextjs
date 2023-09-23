import { useFormContext, Controller } from "react-hook-form";

export default function CircleSelectInput({SelectLength, SelectLabel, CircleSelectLabel, SelectPlaceholder}) {

    const {control, formState: {errors}} = useFormContext()

    const targetShort = "short"
    const targetWide = "wide"

     const LengthSelection = (length) => {
        return length === targetShort ? "w-24" : length === targetWide ? "w-full" : null;
    }

     const LengthSelection2 = (length) => {
        return length === targetShort ? "" : length === targetWide ? "w-80" : null;
    }

    return (
      <div className="flex items-center">
        <label htmlFor={SelectLabel}>{CircleSelectLabel}</label>
        <div className={`ml-auto ${LengthSelection2(SelectLength)}`}>
          <Controller
            name={SelectLabel}
            control={control}
            rules={{required: "この項目は必須です"}}
            render={({field}) =>
              (<select className={`select max-w-xs ${LengthSelection(SelectLength)} ${errors[SelectLabel] && "select-error"}`} id={SelectLabel} defaultValue="option1" {...field}>
                <option disabled value="option1">{SelectPlaceholder}</option>
                <option value="option2">Homer</option>
                <option value="option3">Marge</option>
                <option value="option4">Bart</option>
                <option value="option5">Lisa</option>
              </select>)
            }
          />
          <div className="text-error mt-1">{errors[SelectLabel]?.message as React.ReactNode}</div>
        </div>
      </div>
    )
  }