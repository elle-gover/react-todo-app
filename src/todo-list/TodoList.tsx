import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TodoListItem from './TodoListItem';
import './TodoList.css'

interface ITodoListItem {
    id: number;
    text: string;
}

const items:ITodoListItem[] = [
    {id: 0, text: "Walk the cat"},
    {id: 1, text: "Eat bread"},
    {id: 2, text: "Renew passport"},
    {id: 3, text: "Drink water"}
];

class TodoList extends React.Component {

    render() {
        return (
            <div className="todo-list-container">
                <List>
                  {items.map((item) => {
                      return <TodoListItem text={item.text} />
                  })}
                </List>
            </div>
        )
    }
}

export default TodoList;