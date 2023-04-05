import React from "react"

interface IShowNumbersProps {
    numbers: number[]
}

const ShowNumbers = ({numbers}:IShowNumbersProps) => {

    console.log(numbers)

    const shouldDisplayNumber = (num: number) => {
        if(num%2 !== 0) return <div key={num}> {num} </div>
    }

    return(
        <div>
            <h2>Números:</h2>
            {numbers.map((num)=>shouldDisplayNumber(num))}
            <ul>{numbers.map((num)=>shouldDisplayNumber(num))}</ul>
        </div>
    )
}

export default ShowNumbers