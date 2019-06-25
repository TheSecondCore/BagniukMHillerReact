import React from 'react'

export default class Todo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isBeingEdited: false,
            editField: '',
        }
    }

    startEdit = () => {
        this.setState({
            editField: '',
            isBeingEdited: true
        })
    }

    onChange = (e) => {
        this.setState({ editField: e.target.value })
    }

    confirmEdit = (e) => {
        e.preventDefault()
        if (this.state.editField !== '') {
            this.props.editChild(e.target.parentNode.getAttribute('data-index'), this.state.editField)
        }
        this.setState({ isBeingEdited: false })
    }

    cancelEdit = (e) => {
        this.setState({ editField: '' })
        this.setState({ isBeingEdited: false })
    }

    render() {

        const hideWhenEditing = { display: (this.state.isBeingEdited ? "none" : "") }
        const showWhenEditing = { display: (this.state.isBeingEdited ? "" : "none") }

        return (
            <div data-index={this.props.index}>
                <li style={hideWhenEditing} onClick={this.startEdit}>
                    {this.props.item}
                </li>
                <button onClick={(this.state.isBeingEdited ? this.cancelEdit : this.props.onDelete)}>X</button>
                <button onClick={this.startEdit} style={hideWhenEditing}>Edit</button>
                <input
                    onChange={this.onChange}
                    placeholder={this.props.item}
                    style={showWhenEditing}
                    type="text"
                    onKeyDown={(e) => (e.key === 'Enter' ? this.confirmEdit(e) : null)} />
                <button onClick={this.confirmEdit} style={showWhenEditing}>Confirm</button>
            </div>
        )
    }
}