import React, {useState} from "react";

const Rating = ({callback}) => {
    const [value, setValue] = useState(5);

    function Message (){
        alert('Thanks for your rating')
    }

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
            <p className="message">
                <button onClick={()=>{callback(value);Message()}}>Rating</button>
            </p>
        </div>
    )
}

export default Rating