import React from 'react'

const Program = ( {program} ) => {
    return (
        <div className="program">
            <h3>{program.content}</h3>
            <p>{program.times}</p>
        </div>
    )
}

export default Program
