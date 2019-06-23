import React, { Component } from 'react'
import './App.css'
import Todo from './Todo'


export default class App extends Component {

  constructor() {
    super()
    this.state = {
      inputField: '',
      items: [],
    }
  }

  onChange = (e) => {
    this.setState({ inputField: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({
      inputField: '',
      items: [...this.state.items, this.state.inputField]
    }, () => {
      localStorage.setItem('items', JSON.stringify(this.state.items))
    })
  }

  editChild = (index, newValue) => {
    let newItems = this.state.items
    newItems[index] = newValue
    this.setState({
      items: newItems
    }, () => {
      localStorage.setItem('items', JSON.stringify(this.state.items))
    })
  }

  onDelete = (e) => {
    let newItems = this.state.items
    newItems.splice(e.target.parentNode.getAttribute('data-index'), 1)
    this.setState({
      items: newItems
    }, () => {
      localStorage.setItem('items', JSON.stringify(this.state.items))
    })
  }

  componentDidMount() {
    if (localStorage.getItem('items') !== null) {
      this.setState({ items: JSON.parse(localStorage.getItem('items')) })
    }
  }

  fetchJSON = (e) => {
    e.preventDefault()
    for (let i = 0; i < 10; i++) {
      let randomNumber = Math.floor(Math.random() * 200 + 1)
      fetch('https://jsonplaceholder.typicode.com/todos/' + randomNumber)
        .then(response => {
          response.json()
            .then(data => {
              this.setState({
                items: [...this.state.items, data["title"]]
              }, () => {
                localStorage.setItem('items', JSON.stringify(this.state.items))
              })
            })
        })
        .catch(error => console.log("There was an error with the fetch request: ", error))
    }
  }

  render() {

    return (

      <div style={{textAlign: 'center'}}>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.inputField} onChange={this.onChange} />
          <button>Submit</button>
          <hr />
          <button onClick={this.fetchJSON}>Load 10 random placeholder posts from JSONplaceholder</button>
        </form>
        <br/>
        <div className="List">
          <ul>
            {this.state.items.map((item, index) =>
              <Todo
                key={index}
                editChild={this.editChild}
                index={index}
                item={item}
                onDelete={this.onDelete} />
            )}
          </ul>
        </div>
      </div>

    )
  }

}
