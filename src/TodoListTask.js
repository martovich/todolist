import React from 'react';
import './App.css';

class TodoListTask extends React.Component {

    state = {
        editMode:false
    };
    onIsDoneChanged = (e) => {
        this.props.onTaskStatusChanged(this.props.task.id, e.currentTarget.checked);
    }
    onTitleChanged = (e) => {
        this.props.onTitleChanged(this.props.task.id, e.currentTarget.value);
    };
    activateEditMode = () => {
        this.setState({editMode:true})
    };
    deactivateEditMode = () => {
        this.setState({editMode:false})
    };
    render = () => {
        let taskClass = this.props.task.isDone ? "todoList-task done" : "todoList-task";

        return (
            <div className={taskClass}>
                <input type="checkbox" checked={this.props.task.isDone}
                       onChange={this.onIsDoneChanged}/>
                {this.state.editMode
                    ? <input autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.onTitleChanged} value={this.props.task.title}/>
                    : <span onClick={this.activateEditMode}>{this.props.task.id}: {this.props.task.title}</span>
                },
                {/*<span>{this.props.task.id}: </span>*/}
                {/*<span>{this.props.task.title}</span>,*/}
                priority: {this.props.task.priority}
            </div>
        );
    }
}

export default TodoListTask;