import React from 'react'
import Todo from './Todo'

const List = (props) => (
    <div className="List">
    <ul>
      {
        props.items.map((item, index) => 
            <Todo key={index} editChild={props.editChild} index={index} item={item} onDelete={props.onDelete} />
        )
      }
    </ul>
    
    </div>
)

export default List