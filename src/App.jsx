import { useState } from 'react';
import './App.css'
import List from './List';

export const list = []

function App() {
  const [value, setValue] = useState('');
  const handleChange = (v) => {
    setValue(v);
  }

  const addHandler = () => {
    list.push(value)
    // setValue('')
  }

  console.log(list);

  return (
    <>
      <div>
        <input type="text"
          value={value}
          onChange={e => handleChange(e.target.value)}
        />
        <button onClick={addHandler}>Add</button>
      </div>

      <List />
    </>
  );
}

export default App;
