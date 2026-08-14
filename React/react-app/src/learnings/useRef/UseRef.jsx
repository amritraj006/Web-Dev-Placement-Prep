
import { useRef } from 'react'

const UseRef = () => {
    const inputRef = useRef(null)
    const valueRef = useRef('Initial Value')
  return (
    <div>
        <h1>UseRef</h1>
        <input ref={inputRef} type="text" placeholder="Enter text..." />
        <button onClick={() => inputRef.current.focus()}>Focus Input</button>


        <button onClick={() => valueRef.current = 'Updated Value'}>Update Value</button>
        <p>Current Value: {valueRef.current}</p>
    </div>
  )
}

export default UseRef