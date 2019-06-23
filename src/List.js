import React from 'react'
import Todo from './Todo'

const List = ({items, editChild, onDelete}) => (
    <div className="List">
    <ul>
      {
        items.map((item, index) => 
            <Todo key={index} editChild={editChild} index={index} item={item} onDelete={onDelete} />
        )
      }
    </ul>
    
    </div>
)

export default List