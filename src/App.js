import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {
    tasks = [
        { title : "JS", isDone : true, priority : "medium"},
        { title : "JS", isDone : false, priority : "medium"},
        { title : "ReactJS", isDone : true, priority : "medium"},
        { title : "Patterns", isDone : false, priority : "high"}
    ];
    filterVal = "Completed";
    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader />
                    <TodoListTasks  tasks = {this.tasks}/>
                    <TodoListFooter filterValue = {this.filterVal}/>
                </div>
            </div>
        );
    }
}

export default App;

