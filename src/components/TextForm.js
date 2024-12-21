import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState(""); // Initialize with an empty string

    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase(); // Fix here: calling toLowerCase() properly
        setText(newText);
    };

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    };

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    id="myBox"
                    rows="8"
                    placeholder="" // Add a placeholder for better UX
                ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>
                Convert to Uppercase
            </button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>
                Convert to Lowercase
            </button>
        </div>
        <div  className='container my-2'>
            <h2>Your Text Summary</h2>
            <p>
                {text.split(" ").length} words and {text.length} characters
            </p>
            <p>
                {0.008 * text.split(" ").length} minutes to read
            </p>
            <h2>Preview</h2>
            <p>
                {text}
            </p>
        </div>
        </>
    );
}
