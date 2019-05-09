import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Checkbox from '@material-ui/core/Checkbox'

//function component - doesn't keep internal state
interface ITodoListItemProps {
    text: string;
}

function TodoListItem(props: ITodoListItemProps) {
    return (
        <ListItem>
            <ListItemText primary={props.text} />
            <ListItemSecondaryAction>
                <Checkbox />
            </ListItemSecondaryAction>
        </ListItem>
    )
} 

export default TodoListItem;