import React from 'react';
import ReactDom from 'react-dom';

// function getButtonText(){
//     return 'click me now!'
// }

const App=()=>{

    const buttonText={text:'click me!'};

    const style={backgroundColor:'blue', color:'white'};

    return <div>
        <label class="lable" for="name">Enter Name</label>
        <input id="name" type="text"/>
        <button style={style}>
            {buttonText.text}
        </button>
        </div>
        
};

ReactDom.render(<App/>,document.querySelector('#root'));