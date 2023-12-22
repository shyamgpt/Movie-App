import React from "react";


 // 1st way of rendering props -->
// class Student extends React.Component{
//     render(){
//         console.log(this.props);
//         // 1st way of rendering props -->
//         // return(
//         //     <>
//         //     <h1>Hello, {this.props.stuname}</h1>
//         //     <p>You have seured {this.props.marks} %</p>
//         //     <hr/>
//         //     </>
//         // )

//        
        
//     }
// }

 //2nd way of rendering of props -->By the process of destructuring 
// class Student extends React.Component{
//         render(){
//             const {stuname, marks} = this.props;
           
//             return(
//                 <>
//                 <h1>Hello, {stuname}</h1>
//                 <p>You have seured {marks} %</p>
//                 <hr/>
//                 </>
//             )
    
           
            
//         }
//     }

function Student(props) {
    const {stuname, marks} = props;
    return(
        <>
        <h1>Hello, {stuname}</h1>
        <p>You have secured {marks}%</p>
        </>
    ) 
}

export default Student;