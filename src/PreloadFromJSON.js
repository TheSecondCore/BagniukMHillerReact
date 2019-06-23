import React from 'react'

 class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdited : false,
            editField : null,
        }
    }

    startEdit = () => {
    
    }

    onChange = () => {
    
    }

    confirmEdit = () => {

    }

    render() {
        return (
            <h1>This is a post</h1>
        )
    }
 }

 export default Post