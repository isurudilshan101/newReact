import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker'; 
import CommentDetails from './CommentDetails';

// function getButtonText(){
//     return 'click me now!'
// }

const App=()=>{

     

    return (
        <div className="ui container comments">
            
            
           <CommentDetails/>

        </div>
    );
        
};

ReactDom.render(<App/>,document.querySelector('#root'))