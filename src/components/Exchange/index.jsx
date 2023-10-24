import { useSelector } from "react-redux"
import { Selection } from "./Selection"

export const Exchange = () => {
  const { convertedNumber } = useSelector(state => state.rates)

  return (
    <div className="exchange">
      <Selection />
      <input 
        type="text" readOnly className="result" 
        value={convertedNumber} 
      />
    </div>
  )
}