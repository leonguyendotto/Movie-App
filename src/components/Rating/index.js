import React, {useState} from "react";

const Rating = ({callback}) => {
    const [value, setValue] = useState(5);

    return (
        <div>
            <input
                type='range'
                min='1'
                max='10'
                value={value}
                onChange={e => setValue(e.currentTarget.value)}
            />
            {value}
            <p>
                <button onClick={()=>callback(value)}>Rating</button>
            </p>
        </div>
    )
}

export default Rating