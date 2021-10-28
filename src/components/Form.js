import React from 'react'

const Form = () => {
    return (
        <div className="form-div">
            <h2>Want to try a class or book a private lesson?</h2>
            <p>Start Here</p>
        <form className="form-control">
            <label>Name:</label>
            <input type="text" placeholder="Your name here..." />
            <label>Date and Time:</label>
            <input type="date" placeholder="Date and Time here..." />
        </form>
        </div>
    )
}

export default Form;