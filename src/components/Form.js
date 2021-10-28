import React from 'react'

const Form = ( {onSubmit} ) => {
    return (
        <div className="form-div">
            <h2>Want to try a class or book a private lesson?</h2>
            <p>Start Here</p>
        <form className="form-control" onSubmit={onSubmit} >
            <label>Name:</label>
            <input type="text" placeholder="Your name here..." />
            <label>Date:</label>
            <input type="date" placeholder="Date and here..." />
            <label>Time:</label>
            <input type="text" placeholder="Time here..." />
            <button type="submit">Submit Reservation</button>
        </form>
        </div>
    )
}

export default Form;