import React, { Component } from 'react'
import { connect } from 'react-redux'
import LineItem from '../components/LineItem';

class TodoAppContainer extends Component {
    addTodo(event) {
        event.preventDefault()
        this.props.addTodo(event.target[0].value)
    }

  render() {
    console.log('props', this.props)
    return (
      <div>
        <div className="columns is-centered">
            <div className="column is-half">
                <div className="box m-auto">
                    <h4 className="title is-4">
                        My ToDo List
                    </h4>
                    <form onSubmit={(event) => this.addTodo(event)}>
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" 
                                       type="text" 
                                       placeholder="Add a todo item..."/>
                            </div>
                            <div className="control">
                                <button className="button is-primary" 
                                        type="submit">
                                        Add
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="content">
                        <ul>
                            {(this.props.todos).map((item, index) => <LineItem item={item} key={index} />)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todoText) => dispatch({type: 'ADD_TODO', text: todoText, done: false})
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoAppContainer)