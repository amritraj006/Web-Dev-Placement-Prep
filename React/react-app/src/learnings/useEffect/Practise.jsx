import { useEffect, useState } from "react";

const Practise = () => {

    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Effect runs");

        return () => console.log("Effect removes");
    }, [count])

    console.log("Component renders");
    
  return (
    <>
    <button onClick={() => setCount(count + 1)}>Count : {count}</button>
    </>
  );
};

export default Practise;