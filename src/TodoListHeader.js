import React from 'react';
import s from './App.css';

class TodoListHeader extends React.Component {

    constructor(props) {
        super(props);
        // this.newTasksTitleRef = React.createRef();
    }

    onAddTaskClick = () => {
        //let newText = this.newTasksTitileRef.current.value;
        //this.newTasksTitileRef.current.value = "";
        let newTitle = this.state.title;
        this.setState({title:""});
        if(newTitle === "")
            this.setState({error : true})
        else{
            this.setState({error :false})
            this.props.onTaskAdded(newTitle);
        }
    }
    onTitleChanged = (event) => {
        this.setState({
            error : false,
            title : event.currentTarget.value
        })
    }
    onKeyPress = (e) => {
        if(e.key === "Enter"){
            this.onAddTaskClick();
        }
    }

    state = {
        error : false,
        title : ""
    }

    render = () => {
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input
                        className={s.error}
                        type="text"
                        placeholder="New task name"
                        // ref={this.newTasksTitleRef}
                        onKeyPress = {this.onKeyPress}
                        value = {this.state.title}
                    onChange={this.onTitleChanged}/>
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;