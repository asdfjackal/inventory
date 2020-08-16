import React, { Component } from 'react';

function LocationItem(props){
    const {value, name, increment, decrement} = props
    return (
        <tr>
            <td>{name}</td>
            <td>{value}</td>
            <td>
                <span onClick={decrement}>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
                <span> | </span>
                <span onClick={increment}>&nbsp;&nbsp;+&nbsp;&nbsp;</span>
            </td>
        </tr>
    )
}

export default LocationItem