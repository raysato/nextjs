import MainVisual, { themes } from "../../components/MainVisual"
import CircleForm from "../../components/CircleForm"

export default function SearchResult() {
    return (
      <>
        <MainVisual 
          visualTheme={themes.visualForm}
        />

        <CircleForm />
        
      </>
    )
  }