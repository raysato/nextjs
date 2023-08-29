export default function CircleSelectInput({SelectLength, SelectLabel, CircleSelectLabel, SelectPlaceholder}) {

     const LengthSelection = (length) => {
        const targetShort = "short"
        const targetWide = "wide"

        if (length === targetShort) {
            return "w-24";
        } else if (length === targetWide) {
            return "w-full";
        }
    }
    return (
      <div className="flex items-center">
        <label htmlFor={SelectLabel}>{CircleSelectLabel}</label>
        <select className={`select max-w-xs ml-auto block ${LengthSelection(SelectLength)}`} id={SelectLabel}defaultValue="option1">
            <option disabled value="option1">{SelectPlaceholder}</option>
            <option value="option2">Homer</option>
            <option value="option3">Marge</option>
            <option value="option4">Bart</option>
            <option value="option5">Lisa</option>
        </select>
      </div>
    )
  }