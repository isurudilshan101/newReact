import React from 'react';
import ReactDom from 'react-dom';

const App=()=>{

    const buttonText='click me!';
    return <div>
        <label class="lable" for="name">Enter Name</label>
        <input id="name" type="text"/>
        <button style={{backgroundColor:'blue', color:'white'}}>
            {buttonText}
        </button>
        </div>
        
};

ReactDom.render(<App/>,document.querySelector('#root'));