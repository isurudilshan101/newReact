import React from 'react';
import ReactDom from 'react-dom';

const App=()=>{
    return <div>
        <label class="lable" for="name">Enter Name</label>
        <input id="name" type="text"/>
        <button style="background-color:blue; color:white;">Submit</button>
        </div>
        
};

ReactDom.render(<App/>,document.querySelector('#root'));