import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpCase=()=>{
        // console.log("text");
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleCase =()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const clearText =()=>{
        let newText = ("");
        setText(newText)
    }

    const copyText =()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }


    const handleOnChange=(event)=>{
        // console.log("on Change");
        setText(event.target.value)
    }

    let myStyle={
        fontFamily:'italic'
    }

    const [text, setText] = useState("");
  return (
    <>
    <div>
    <h1 style={myStyle}>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpCase} >Convert to UpperCase</button>
    <button className="btn btn-success mx-2" onClick={handleCase} >Convert to LowerCase</button>
    <button className="btn btn-danger mx-2" onClick={clearText} >Clear Text</button>
    <button className="btn btn-secondary mx-2" onClick={copyText} >Copy Text</button>
  </div>

    <div className=" my-3 container">
        <h3>Your Word Summary</h3>
        <p>{text.split(" ").length} Words and {text.length} Cahracters</p>

        <h3>Estimated time to read</h3>
        <p>{0.008 * text.split(' ').length} Minutes</p>
    </div>
    <div className=' my-3 container'>
        <h3>Preview</h3>
    <p style={{color:"black"}}>{text.length>0?text:"Enter somthing above to preview it here"}</p>
    </div>

    </>
  )
}
