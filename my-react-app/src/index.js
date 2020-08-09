import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker'; 
import CommentDetail from './CommentDetail';

// function getButtonText(){
//     return 'click me now!'
// }

const App=()=>{

     

    return (
        <div className="ui container comments">
            
            
           <CommentDetail author="sam"/>
           <CommentDetail author="isuru"/>
           <CommentDetail author="dilshan"/>
           

        </div>
    );
        
};

ReactDom.render(<App/>,document.querySelector('#root'))