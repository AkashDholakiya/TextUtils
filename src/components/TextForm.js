import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpper = () => {
        // setText("you have clicked handleUpper" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const changeHand = (event) => {
        setText(event.target.value);
    } 
    const [text,setText] = useState('');  
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={changeHand} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button onClick={handleUpper} className="btn btn-primary">Change to UpperCase</button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length  } charactors</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}





