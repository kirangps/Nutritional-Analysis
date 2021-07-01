import React from "react";
 
const TextArea = ({typing}) => {
    return(
        <p id="textArea">
            <textarea id="demoAnalysis" cols="30" rows="10" placeholder="eg.1 glass milk
1 butter" onChange={typing}>
            </textarea>
        </p>
    );
}

export default TextArea;