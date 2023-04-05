import React, {useState} from "react"
import flame from "../../assets/imgs/flame.png"
import "./style.css"

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
        <div className="c_button_counter">
            <h3 className="value_count">{count}</h3>
            <button onClick={handleClick} disabled={!active}>
                {title} <img src={flame} alt="fogo" width="20px" />
            </button>
        </div>
    )
}

export default ButtonCounter