import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("cick button")
        let newtext=text.toUpperCase()
        setText(newtext)
        props.showAlert("Convert to uppercase","success")
    }

    const handleLoClick=()=>{
      console.log("cick button")
      let newtext=text.toLowerCase()
      setText(newtext)
      props.showAlert("Convert to lowercase","success")
  }

    const handleOnChange=(event)=>{
        console.log("onchange click")
        setText(event.target.value)
    }
    const[text,setText]=useState("")
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} ></textarea>
</div>
<button onClick={handleUpClick} className="btn btn-primary mx-1">Convert to Uppercase</button>
<button onClick={handleLoClick} className="btn btn-primary mx-1">Convert to Uppercase</button>
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>
        Your text summary 
      </h1>
      <p>{text.split(" ").length}words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0? text:"Enter something to textbox above to preview it here"}</p>

    </div>
    </>
  )
}
