import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({data}) => {
    return (
        <div className="row">
            {
                data.map(list => {
                    return <MenuItem key={list.id} {...list}/>})
            }
        </div>
    )
}

export default MenuList
