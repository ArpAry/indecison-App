// import validator from "validator";
import React from "react";
import ReactDOM from "react-dom";
import Indecisionapp from "./component/Indecisionapp.js";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
const appRoot = document.getElementById("app");
ReactDOM.render(<Indecisionapp />, appRoot);

///how to pass child component in es6 function

// const Layoutgiv= (props) =>
// {
//     return (
//         <div>
//         <p>hello </p>
//         {props.children}
//         <p>this is a indecision-app</p>
//         </div>
//     )
// }

// // const template = (
// //         <div>
// //     <p> how do you do</p>
// //     <p>this is a inline document</p>
// // </div>
// // );
// ReactDOM.render( <Layoutgiv> <p>this is a inline document</p>  </Layoutgiv> ,document.getElementById("app") );
