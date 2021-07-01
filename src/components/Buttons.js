import React from "react";

const Buttons = ({analyze, newRecipe, data}) => {
    return(
        <div id="change">
            <button className="btn btn-success btn-sm m-2" style={{background:"black"}} onClick={analyze}>Analyze</button>
            {(data)?<button className="btn btn-success btn-sm m-2"  style={{background:"black"}} onClick={newRecipe}>New recipe/Item</button>:""}
        </div>
    );
}

export default Buttons;