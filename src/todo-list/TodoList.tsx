import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TodoListItem from './TodoListItem';
import { ITodoListItem } from '../App';

type TodoListProps = {
    items: ITodoListItem[]
}

class TodoList extends React.Component<TodoListProps> {

    render() {
        return ( // JSX
            <div className="todo-list-container">
                <List>
                  {this.props.items.map((item) => {
                      return <TodoListItem text={item.text} />
                  })}
                </List>
            </div>
        )
    }
}

export default TodoList;