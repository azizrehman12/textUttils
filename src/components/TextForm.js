import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState(""); // Initialize with an empty string

    // Convert text to uppercase
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    // Convert text to lowercase
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    // Copy text to clipboard
    const handleCopy = () => {
        console.log("Copy");
        const textArea = document.getElementById("myBox");
        textArea.select();
        navigator.clipboard.writeText(textArea.value);
        alert("Text copied to clipboard!");
    };

    // Clear the text field
    const handleClearClick = () => {
        setText("");
    };

    // Update text as user types
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    // Calculate word count accurately
    const calculateWordCount = () => {
        return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    };

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="8"
                        placeholder="Enter text here"
                    ></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-danger mx-2" onClick={handleClearClick}>
                    Clear Text
                </button>
                <button className="btn btn-secondary mx-2" onClick={handleCopy}>
                    Copy Text
                </button>
            </div>
            <div className="container my-2">
                <h2>Your Text Summary</h2>
                <p>
                    {calculateWordCount()} words and {text.length} characters
                </p>
                <p>
                    {0.008 * calculateWordCount()} minutes to read
                </p>
                <h2>Preview</h2>
                <p>
                    {text.length > 0 ? text : "Nothing to preview!"}
                </p>
            </div>
        </>
    );
}
