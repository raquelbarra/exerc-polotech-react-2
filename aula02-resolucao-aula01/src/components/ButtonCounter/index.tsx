import React, {useState} from "react"

export interface IButtonCounterProps {
    title: string,
    active?: boolean //atributo opcional
}

const ButtonCounter = ({title, active=false}:IButtonCounterProps) => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick} disabled={!active}>
            {title}: {count}
        </button>
    )
}

export default ButtonCounter