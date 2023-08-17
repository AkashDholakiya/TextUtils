import React, {useState} from 'react'


export default function TextForm(props) {
    const fun1 = (word) => {
        let c = 0;
        for(let i = 0; i < word.length; i++){
            if(word[i] !== ' ')c++;
        }
        return c;
    }
    // const fun2 = (words) => {
    //     let c = 0;
    //     if(words.length === 0)return 0;
    //     for (let i = 0; i < words.length-1; i++) {
    //         if(words[i] === ' ' && words[i+1] !== ' ')c++;
    //     }
    //     return c+1;
    // }
    const handleUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text Converted to Upper case','success');
    }
    const clipit = () => {
        let txt = document.getElementById('clip-box');
        navigator.clipboard.writeText(txt.value);
        props.showAlert('Copied to ClipBoard','success');
    }
    const changeHand = (event) => {
        setText(event.target.value);
    } 
    const [text,setText] = useState('');
    
  return (
    <>
    <div className='container' >
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={changeHand} id="clip-box" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} onClick={handleUpper} className="btn btn-primary mx-1 my-1">Change to UpperCase</button>
        <button disabled={text.length === 0} onClick={clipit} className="btn btn-primary mx-1 my-1" >Copy to Clipboard</button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((ele) => ele.length !== 0).length} words and {fun1(text)} charactors</p>
        <p>{0.008 * text.split(/\s+/).filter((ele) => ele.length !== 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}





