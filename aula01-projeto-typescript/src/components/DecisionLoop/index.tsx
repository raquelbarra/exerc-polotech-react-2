import React from "react"

const DecisionLoop = () => {
    const numbers = [1,2,3,4,5,6]

    return(
        <div>
            {numbers.length>0 ? (
                <h2>
                    Lista de números
                </h2>
            ) : (
                <h2>
                    Lista vazia
                </h2>
            )}
        </div>
    )
}

export default DecisionLoop