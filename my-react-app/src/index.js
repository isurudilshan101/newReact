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
            
            
           <CommentDetail author1="sam" timeAgo="today at 5.00pm" />
           <CommentDetail author1="isuru" timeAgo="today at 4.00pm"/>
           <CommentDetail author1="dilshan" timeAgo="yesterday at 1.00am"/>
           

        </div>
    );
        
};

ReactDom.render(<App/>,document.querySelector('#root'))