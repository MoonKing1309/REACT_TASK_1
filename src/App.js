import { useState } from 'react';
import './App.css'
function App()
{
  const [value,setValue] = useState(0);
  function handleChange(event)
  {
    setValue(event.target.value.length);
  }
  return(
    <div className="centered">
      <p className="title">Responsive Paragraph Word Counter</p>
      <textarea className="text-box" rows="10" cols="50" onChange={handleChange}></textarea>
      <p className="counter" > Word Count:{value}</p>
    </div>
  )
}

export default App