import { useFormContext, Controller } from "react-hook-form"

export default function CircleTextInput({TextLabel, CircleTextLabel, TextPlaceholder}) {

    const {control, formState: {errors}} = useFormContext()

    return (
      <div className="flex items-center">
        <label htmlFor={TextLabel}>{CircleTextLabel}</label>
        <div className="ml-auto w-80">
            <Controller
                name={TextLabel}
                control={control}
                rules={{required: "この項目は必須です"}}
                render={({field}) => (<input type="text" placeholder={TextPlaceholder} className={`input input-bordered w-full max-w-xs ${errors[TextLabel] && "input-error"}`} id={TextLabel} {...field}/>)}
            />
            <div className="text-error mt-1">{errors[TextLabel]?.message as React.ReactNode}</div>
        </div>
      </div>
    )
  }