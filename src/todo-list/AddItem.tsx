import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/CheckCircle';
import { withStyles } from "@material-ui/core";
import "./todo.css";

//types
type AddItemProps = {
    [key: string]: any;
}

const style = {
    addButtonRoot: {
        display: "flex",
        justifyContent: "flex-end"
    }
};

class AddItem extends React.Component<AddItemProps> {
    state = {
        showAddButton: true
    }

    handleClickAddButton = () => {
        this.setState({ showAddButton: false })
        //make cancel button show true
    }

    handleClickCancelButton = () => {
        this.setState({ showAddButton: true })
        //make cancel button show true
    }

    handleClickSaveButton = () => {
        
    }

    render() {
        if (this.state.showAddButton) {
            return (
                <div className={this.props.classes.addButtonRoot}>
                    <Fab onClick={this.handleClickAddButton} color="secondary">
                        <AddIcon />
                    </Fab>
                </div>

            );
        } else {
            return (
                <div className="add-item-input-container">
                    <TextField fullWidth placeholder="Type your todo here..."/>
                    <IconButton onClick={this.handleClickCancelButton} aria-label="cancel">
                        <CancelIcon />
                    </IconButton>

                    <IconButton aria-label="save">
                        <SaveIcon />
                    </IconButton>
                </div>
            );
        }
        
    }
}

export default withStyles(style)(AddItem);
