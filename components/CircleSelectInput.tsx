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
        <select className={`select max-w-xs ml-auto block ${LengthSelection(SelectLength)}`} id={SelectLabel}>
            <option disabled selected>{SelectPlaceholder}</option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
        </select>
      </div>
    )
  }