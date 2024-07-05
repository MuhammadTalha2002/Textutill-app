import React, {useState} from 'react';
import "./Input.css"
function Input(){
    const[text, setText]=useState('Example Text');
    const handleUpCase=()=>{
        let new_text=text.toUpperCase();
        setText(new_text);

    }
    const handleLwCase=()=>{
        let new_text=text.toLowerCase();
        setText(new_text);

    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    return(
        <div className="InputCont">
                <div className="Input">
                    <h1>Word And Character Count</h1>
                    <p>{text.split(" ").length} Words and {text.length} Characters</p>
                    <textarea class="form-control" type="text" value={text} onChange={handleOnChange} rows={15} cols={157}/>
                </div>
                <div className='ButtonCont'>
                    <div className='BTN'>
                        <button onClick={handleUpCase}>UpperCase</button>
                    </div>
                    <div className='BTN'>
                        <button onClick={handleLwCase}>LowerCase</button>
                    </div>
                </div>
                <div className='OverView'>
                    <h1>Overview</h1>
                    <p>{text}</p>
                </div>
        </div>

    );
};
export default Input;