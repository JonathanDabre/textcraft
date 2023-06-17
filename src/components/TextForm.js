import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newUpText = text.toUpperCase();
        setText(newUpText)    
    }
    const handleLoClick = () =>{
        // console.log('Lowercase was clicked')
        let newLoText = text.toLowerCase();
        setText(newLoText)
    }

    const handleClrClick = () =>{
        // console.log('Clear Text Clicked')
        setText('')
    }

    const handleCopyClick = () =>{
        // console.log("Copy to clipboard clicked")
        navigator.clipboard.writeText(text)
        // alert("Copied the text")
        props.showAlert("Copied to the clipboard", "success")
    }

    const handleOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    // text = "My new text" -- wrong way
    // setText('new Text'); -- correct way
    
    let wordcount = text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length   
    let charCount = text.length
    let tweetlen = 280 - charCount

    return (
        <>
            <div className='container' style={{color:props.mode === 'dark'? 'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="my-3 mb-3">
                <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'? props.whichHex :'white', color:props.mode === 'dark'? 'white':'black'}} value={text} id="myText" rows="8"></textarea>
                </div>
                <button className={`btn btn-${props.whichMode === 'light' ? 'primary': props.whichMode} me-3` } onClick={handleUpClick}>Convert To Uppercase</button> 
                <button className={`btn btn-${props.whichMode === 'light' ? 'primary': props.whichMode} me-3` } onClick={handleLoClick}>Convert To Lowercase</button>
                <button className={`btn btn-${props.whichMode === 'light' ? 'primary': props.whichMode} me-3` } onClick={handleCopyClick}><i className="bi bi-twitter text-white"></i> {tweetlen}</button> 
                <button className="btn btn-success me-3 " onClick={handleCopyClick} data-toggle="tooltip" data-placement="top" title="Copy to clipboard">Copy</button>
                <button className="btn btn-danger me-3 " onClick={handleClrClick}>Clear Text</button>  


            </div>
            <div className="container my-3" style={{color:props.mode === 'dark'? 'white':'black'}}>
                <h2>Your text summarys</h2>

                <p>{wordcount} words and {text.trim().length} characters</p>
                <p>{0.008*(text.trim().length)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text: "Enter text to Preview"}</p>
            </div>
        </>

    )
}
