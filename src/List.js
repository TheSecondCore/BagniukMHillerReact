import React from 'react'

const List = (props) => (
    <div className="List">
    <ul>
      {
        props.items.map((item, index) => 
            <div key={index}>
                <li>{item}</li>
                <button data-key={index} onClick={props.onDelete}>X</button>
                <button data-key={index}>Edit</button>
            </div>
        )
      }
    </ul>
    
    </div>
)

export default List