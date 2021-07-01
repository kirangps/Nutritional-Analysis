import React from "react";
import Tbody from "./Tbody";

const Table = ({data, inputs}) => {
    let s_no = 0;
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Item</th>
                    <th>Calories</th>
                    <th>Weight</th>
                </tr>
            </thead>
            <tbody>
                {   
                    data.map((item, i) => {
                        if(!item.error) {
                            s_no++;
                            return <Tbody s_no={s_no} item={item} i={i} key={i} inputs={inputs}/>;
                        }
                    })
                }                
            </tbody>
        </table>
    );
}

export default Table;