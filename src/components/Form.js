import React, {useState} from 'react'


export default function Form(props) {
    const handleUpClick = () => { //
    // console.log('clicked');
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success")
    }
    const handleLowClick = () => { //
        // console.log('clicked');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")

        }
    const handleClearClick = () => { //
        // console.log('clicked');
        let newText = '';
        setText(newText);
        props.showAlert("Cleared Text", "success")
        }
    const onAlternatingCase = () => {
        let newtext = ""
        for (let index = 0; index < text.length; index++) {
            if ((index % 2) === 0) {
                newtext += text[index].toLowerCase()
            }
            else {
                newtext += text[index].toUpperCase()
            }

        }
        setText(newtext)
        props.showAlert("Converted to alternating case", "success")
    }

    const handleTitleCase=()=>{
        let newText = text.replace(/\w\S*/g, function(t){ return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase(); } );
        setText(newText);
        props.showAlert("Converted to title case", "success")
    }

    const handleOnChange = (event) => { // for changinf value of text in form text area
        // console.log('OnChange');
        setText(event.target.value);
        }

  const [text, setText] = useState('');   // state concept
    //   text = "hello world" // Wrong way to change the state
    //   setText("hello world") // Correct way to change the state
  return (
    <>
        <div className='container' style={{color: props.mode==="dark"?"white":"#042743" }} >
            <h3 className='mb-3' >{props.heading}</h3>
            <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"rgb(36 74 104)":"white", color: props.mode==="dark"?"white":"#042743" }} id="myBox" rows="10"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={onAlternatingCase}>convert to Alternating case</button>
            <button disabled={text.length===0} className="btn btn-primary my-1 mx-1    " onClick={handleTitleCase}>convert to Title case</button>




        </div>
        <div className="container my-3" style={{color: props.mode==="dark"?"white":"#042743" }} >
            <h3>your text summary</h3>
            <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters & {0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes read</p>
        </div>
    </>
    

  )
}
