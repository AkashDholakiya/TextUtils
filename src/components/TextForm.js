import React, {useState} from 'react'


export default function TextForm(props) {
    const fun1 = (word) => {
        let c = 0;
        for(let i = 0; i < word.length; i++){
            if(word[i] !== ' ')c++;
        }
        return c;
    }
    const fun2 = (words) => {
        let c = 0;
        if(words.length === 0)return 0;
        for (let i = 0; i < words.length-1; i++) {
            if(words[i] === ' ' && words[i+1] !== ' ')c++;
        }
        return c+1;
    }
    const handleUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text Converted to Upper case','success');
    }
    const clipit = () => {
        let txt = document.getElementById('clip-box');
        txt.select();
        txt.setSelectionRange(0,9999);
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
        <button onClick={handleUpper} className="btn btn-primary mx-2">Change to UpperCase</button>
        <button onClick={clipit} className="btn btn-primary" >Copy to Clipboard</button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{fun2(text)} words and {fun1(text)} charactors</p>
        <p>{0.008 * fun2(text)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}





