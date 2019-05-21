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

const App = (props: AppProps): JSX.Element => {
  return (
    <div className={props.classes.root}>
      <Grid container direction="column">
        <Grid item>
          <TitleSheet />
        </Grid>
        
        <Grid item>
          <TodoList />
        </Grid>
        
        <Grid item>
          <AddItem />
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(style)(App);
