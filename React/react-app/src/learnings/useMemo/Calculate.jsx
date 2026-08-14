
import { useState, useMemo } from 'react'

const Calculate = () => {
    const [value, setValue] = useState({
        a: 2342,
        b: 2423
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValue((prev) => ({
            ...prev,
            [name]: value
        }))

    }

    const calculate = (a, b) => {
        console.log("Calculating...");
        return parseInt(a) + parseInt(b);
    }

    const result = useMemo(() => {
        return calculate(value.a, value.b);
    }, [value.a, value.b]);


  return (
    <div>
        <h1>Calculate</h1>
        <input type='number' name='a' value={value.a} onChange={handleChange} />
        <input type='number' name='b' value={value.b} onChange={handleChange} />
        <p>Result: {result}</p>
    </div>
  )
}

export default Calculate