import { useEffect, useState } from "react"
import { Select } from "../Select"
import { useConvertMutation } from "../../store/services/rates";
import { setConvertedNumber } from "../../store/reducers/rates";
import { useDispatch } from "react-redux";

export const Selection = () => {
  const [from, setFrom] = useState('EUR');
  const [to, setTo] = useState('USD');
  const [amount, setAmount] = useState('0');
  const [convert, { data, isError, isLoading }] = useConvertMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) dispatch(setConvertedNumber(data.result));
  }, [data])

  const fetch = () => {
    if (amount.length !== 0) {
      console.log(from, to, amount);
      convert({to, from, amount});
    }
  }

  return (
    <div className="selection">
      <div className="options">
        <Select getOption={(data) => {setFrom(data)}} />
        <p>→</p>
        <Select 
          getOption={(data) => {setTo(data)}} 
          initial={'USD'} 
        />
      </div>
      <input 
        placeholder="200" type="number" defaultValue={0} 
        onChange={(e) => {setAmount(e.target.value)}}
      />
      <button onClick={fetch}>
        {isLoading ? "Loading..." : "Submit"}
      </button>
      {
        isError && (
          <h3 className="err">Error, try again later</h3>
        )
      }
    </div>
  )
}