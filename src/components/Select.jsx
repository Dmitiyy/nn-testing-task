import { currencies } from "../App";

export const Select = ({getOption, initial}) => {
  return (
    <select 
      name="currencies" id="currencies"
      onChange={(e) => { getOption(e.target.value) }}
      defaultValue={initial || 'EUR'}
    >
      {
        currencies.map((item, idx) => {
          return (
            <option value={item} key={item + idx}>{item}</option>
          )
        })
      }
    </select>
  )
}