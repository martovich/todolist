import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.newTasksTitileRef = React.createRef();
    }
    componentDidMount() {
        this.restoreState();
    }

    nextTaskId = 0;
    state = {
        tasks: [
            // {id: 1, title: "JS", isDone: true, priority: "medium"},
            // {id: 2, title: "HTML", isDone: true, priority: "low"},
            // {id: 3, title: "CSS", isDone: true, priority: "low"},
            // {id: 4, title: "ReactJS", isDone: false, priority: "high"}
        ],
        filterValue: "All"
    };
    onTaskAdded = (newText) => {
        let newTask = {
            id: this.nextTaskId,
            title: newText,
            isDone: false,
            priority: "low"
        };
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        }, () => {this.saveState()});
    };
    onFilterChanged = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        });
    };
    onTaskStatusChanged = (taskId, isDone) => {
        this.onTaskChanged(taskId,{isDone: isDone})
    };
    onTitleChanged = (taskId, newTitle) => {
        this.onTaskChanged(taskId,{title: newTitle})
    };
    onTaskChanged = (taskId, obj) => {
        // создадим с помощью map новый массив, в котором все остальные таски будут сидеть такие же,
        // а вот та, которую нужно изменить, будет другой: вернём копию таски с изменённым сво-вом
        let newTasks = this.state.tasks.map(t => {
            if (t.id !== taskId) {
                return t; //возвращаем таску без изменения, если это не та таска, которую нужно поменять
            } else {
                // делаем копию таски и сразу перезатираем в ней сво-во isDone новым значением
                return {...t, ...obj};
            }
        });
        // а уже получив новый массив, изменяем этот массив в state с помощью setState
        this.setState({
            tasks: newTasks
        })

    };
    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('our-state', stateAsString);
    };
    restoreState = () => {
        let state = {
            tasks: [],
            filterValue: "All"
        };
        let stateAsString = localStorage.getItem('our-state');
        if(stateAsString != null) {
            state = JSON.parse(stateAsString);
            this.nextTaskId = Math.max.apply(Math, state.tasks.map((o) => {
                return o.id+1;
            }));
        }
        this.setState(state);
    };
    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader onTaskAdded={this.onTaskAdded}/>
                    <TodoListTasks onTaskStatusChanged={this.onTaskStatusChanged}
                                   onTitleChanged={this.onTitleChanged}
                                   tasks={this.state.tasks.filter(t => {
                                       if (this.state.filterValue === "All") {
                                           return true;
                                       }
                                       if (this.state.filterValue === "Active") {
                                           return t.isDone === false;
                                       }
                                       if (this.state.filterValue === "Completed") {
                                           return t.isDone === true;
                                       }
                                   })}/>
                    <TodoListFooter onFilterChanged={this.onFilterChanged} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}
export default App;