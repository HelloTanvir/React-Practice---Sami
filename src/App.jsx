import { useState } from 'react';
import './App.css'

function List({ list }) {
  return (
    <ul>
      {
        list.map((l, index) => <li key={index}>{l}</li>)
      }
    </ul>
  )
}

function App() {
  const [value, setValue] = useState('');
  const handleChange = (v) => {
    setValue(v);
  }

  const [list, setList] = useState([])

  const addHandler = () => {
    setList(prev => [...prev, value])
    setValue('')
  }

  return (
    <>
      <div>
        <input type="text"
          value={value}
          onChange={e => handleChange(e.target.value)}
        />
        <button onClick={addHandler}>Add</button>
      </div>

      <List list={list} />
    </>
  );
}

export default App;
