import React from 'react';

const Tbody = ({s_no, item, i, inputs}) => {
    return (
        <tr>
            <th>{s_no}</th>
            <td>{inputs[i]}</td>
            <td>{Math.round(item.calories)} kcal</td>
            <td>{item.totalWeight.toFixed(1)} g</td>
        </tr>
    );
}

export default Tbody;