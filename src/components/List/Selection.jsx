import { useEffect, useState } from "react";
import { useGetLatestMutation } from "../../store/services/rates";
import { useDispatch } from "react-redux";
import { setData } from "../../store/reducers/rates";
import { Select } from '../Select';

export const Selection = () => {
  const [currency, setCurrency] = useState('EUR');
  const [getLatest, {data, isLoading, isError}] = useGetLatestMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) dispatch(setData(data));
  }, [data])

  const fetch = () => {
    getLatest(currency);
  } 

  return (
    <div className="selection">
      <Select 
        getOption={(data) => {setCurrency(data)}}
      />
      <button onClick={fetch}>{isLoading ? 'Loading...' : 'Submit'}</button>
      {
        isError && (
          <h3 className="err">Error, try again later</h3>
        )
      }
    </div>
  )
}