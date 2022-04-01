import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    // setText("You have clicked on handle Up Click !!!!!!!!!");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On Changed");
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState(" ");

  //   setText("new text"); //Correct way to change the state
  //   text="new text"; //Wrong way to change the state
  return (
    <>
      <div>
        <h1>
          {props.heading}
          {/* {props.heading} - {text} */}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        {/* <button className="btn btn-primary">UpperCase</button> */}
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Extra Space
        </button>
      </div>
      <div className="container my-3">
        <h2> Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters......
        </p>
        <p>{0.008 * text.split(" ").length}Minutes</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something above to preview here....."}
        </p>
      </div>
    </>
  );
}
