import React from "react"
import ShowNumbers from "../ShowNumbers/ShowNumbers"

const DecisionLoop = () => {
    // const numbers: number[] = []
    const numbers = [1,2,3,4,5,6]

    return(
        <div>
            {numbers.length>0 ? (
                <>
                    <ShowNumbers numbers={numbers}/>
                </>
                
            ) : (
                <h2>
                    Lista vazia
                </h2>
            )}
        </div>
    )
}

export default DecisionLoop