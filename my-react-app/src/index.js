import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker'; 
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'; 

// function getButtonText(){
//     return 'click me now!'
// }

const App=()=>{

     

    return (
        <div className="ui container comments">

            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure want to do this ?
                </div>
            </ApprovalCard>
            
            <ApprovalCard>
           <CommentDetail author1="sam" 
           timeAgo="today at 5.00pm"
            message="Good luck"
            avatar={faker.image.avatar()}
            
          />
          </ApprovalCard>

          <ApprovalCard>
           <CommentDetail author1="isuru" 
            timeAgo="today at 4.00pm"
             message="Nice blog"
             avatar={faker.image.avatar()}
             />
             </ApprovalCard> 

             <ApprovalCard>
           <CommentDetail author1="dilshan" 
            timeAgo="yesterday at 1.00am"
             message="well done"
             avatar={faker.image.avatar()}
             />
               </ApprovalCard> 
           

        </div>
    );
        
};

ReactDom.render(<App/>,document.querySelector('#root'))