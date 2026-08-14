import { useState, useEffect } from 'react'

const Timer = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
      
        let timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);

        return () => clearInterval(timer);

     }, []);

  return (
    <div>
      <p>Time : {time}</p>
    </div>
  )
}

export default Timer

