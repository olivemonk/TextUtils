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
            <h3 >{props.heading}</h3>
            <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"grey":"white", color: props.mode==="dark"?"white":"#042743" }} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-2 mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary my-2 " onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary my-2 mx-3 " onClick={onAlternatingCase}>convert to Alternating case</button>
            <button className="btn btn-primary my-2" onClick={handleTitleCase}>convert to Title case</button>




        </div>
        <div className="container my-3" style={{color: props.mode==="dark"?"white":"#042743" }} >
            <h3>your text summary</h3>
            <p>{text.split(' ').length} Words and {text.length} Characters & {0.008 * text.split(' ').length} Minutes read</p>
        </div>
    </>
    

  )
}
