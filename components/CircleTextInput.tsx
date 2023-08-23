export default function CircleTextInput({TextLabel, CircleTextLabel, TextPlaceholder}) {

    return (
      <div className="flex items-center">
        <label htmlFor={TextLabel}>{CircleTextLabel}</label>
        <input type="text" placeholder={TextPlaceholder} className="input input-bordered w-full max-w-xs ml-auto block" id={TextLabel}/>
      </div>
    )
  }