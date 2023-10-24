import { useState } from 'react';
import { Select } from '../Select'

export const Selection = () => {
  const [from, setFrom] = useState('EUR');
  const [to, setTo] = useState('USD');

  return (
    <div className="selection">
      <Select getOption={(data) => {setFrom(data)}} />
      <Select 
        getOption={(data) => {setTo(data)}} 
        initial={'USD'} 
      />
      <button>Submit</button>
    </div>
  )
}