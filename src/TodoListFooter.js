import React from 'react';
import './App.css';

class TodoListFooter extends React.Component {
    state = {
        isHidden: true
    };

    onAllFilterClick = () => {
    };
    onCompletedFilterClick = () => {
    };
    onActiveFilterClick = () => {
    };
    onShowFilterClick = () => {
        this.setState({isHidden: false})
    };
    onHideFilterClick = () => {
        this.setState({isHidden: true})
    };


    render = (props) => {

        let classForAll = this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : "";

        return (
            <div className="todoList-footer">
                {!this.state.isHidden && <div>
                    <button onClick={() => {
                        this.props.onFilterChanged("All")
                    }} className={classForAll}>All
                    </button>
                    <button onClick={() => {
                        this.props.onFilterChanged("Completed")
                    }} className={classForCompleted}>Completed
                    </button>
                    <button onClick={() => {
                        this.props.onFilterChanged("Active")
                    }} className={classForActive}>Active
                    </button>
                </div>}
                {!this.state.isHidden && <span onClick={this.onHideFilterClick}>hide</span>}
                {this.state.isHidden && <span onClick={this.onShowFilterClick}>show</span>}
            </div>
        );
    }
}

export default TodoListFooter;