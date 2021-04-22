import {useState}  from 'react'


export const Counter = () => {

    const [count,setCount] = useState(0)
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(1337)}>Update</button>
        </div>
    )
}


