import React from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import TodoList from './todo-list/TodoList';
import TitleSheet from './TitleSheet';
import AddItem from './todo-list/AddItem';
import Grid from '@material-ui/core/Grid';

//type
type AppProps = {
  classes: {
    root: string;
  };
}

const style = {
  root: {
    width: "50%",
    margin: "auto",
    marginTop: 50
  },
};

export interface ITodoListItem {
  id: number;
  text: string;
}

// Typescript
const initialItems:ITodoListItem[] = [
  {id: 0, text: "Walk the cat"},
  {id: 1, text: "Eat bread"},
  {id: 2, text: "Renew passport"},
  {id: 3, text: "Drink water"}
];

class App extends React.Component<AppProps> {

  state = {
    items: initialItems
  }

  render(){
    return (
      <div className={this.props.classes.root}>
        <Grid container direction="column">
          <Grid item>
            <TitleSheet />
          </Grid>
          
          <Grid item>
            <TodoList items={this.state.items} />
          </Grid>
          
          <Grid item>
            <AddItem />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(style)(App);
