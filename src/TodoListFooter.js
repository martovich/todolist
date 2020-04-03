import React from 'react';
import './App.css';

class TodoListFooter extends React.Component {
    state = {
        isHidden: true
    };

    onAllFilterClick = () => {this.props.onFilterChanged("All")};
    onCompletedFilterClick = () => {this.props.onFilterChanged("Completed")};
    onActiveFilterClick = () => {this.props.onFilterChanged("Active")};
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
                    <button onClick={this.onAllFilterClick} className={classForAll}>All</button>
                    <button onClick={this.onCompletedFilterClick} className={classForCompleted}>Completed</button>
                    <button onClick={this.onActiveFilterClick} className={classForActive}>Active</button>
                </div>}
                {!this.state.isHidden && <span onClick={this.onHideFilterClick}>hide</span>}
                {this.state.isHidden && <span onClick={this.onShowFilterClick}>show</span>}
            </div>
        );
    }
}

export default TodoListFooter;