import React from "react"
import rocket from '../../assets/imgs/rocket.jpg'
import './style.css'

export interface IDecisionloopProps {
    numbers?: number[]
}

const buildListNumberOdd = (list: number[]) => {
    return verifyNumberOddExist(list) ? 
    (<div>
        <ul className="c_decision_lista">
        {list.map((item, index)=>(
            verifyAndBuildItem(item, index)
        ))}
        </ul>
    </div>)
    :
    <div>Não há número ímpar disponível na lista</div>
};

const verifyNumberOddExist = (list: number[])=>{
    let cont = 0
    // eslint-disable-next-line no-lone-blocks
    {list.forEach((item)=>(
        (item%2 !== 0) ? cont++ : ""
    ))}

    return cont > 0 ? true : false
}

const verifyAndBuildItem = (item: number, index: number) => {
    let verifyOdd = item%2 !== 0
    if(verifyOdd){
        return(<li className="c_decision_item" key={index} > <img src={rocket} alt="foguete" width="30px" /> {item}</li>)
    }
};

const noList = () => {
    return(<div>
        Não há valores disponíveis na lista
    </div>)
}

const buildIdList = () => {
    let level = ["4LF4","B3T4","G4M4"]
    let randomNum = Math.floor((level.length-1) * Math.random() + 1)
    let date = Date.now();
    return `${level[randomNum]}/${date}`
}

const DecisionLoop = ({numbers = new Array(0) }:IDecisionloopProps) => {
    const validation = numbers.length > 0
    let title = buildIdList()

    return(
        <div className="c_decision_loop">
            <h3>Lista - Número ímpar - {title}</h3>
            {validation ? buildListNumberOdd(numbers) : noList()}
        </div>
    )
}

export default DecisionLoop