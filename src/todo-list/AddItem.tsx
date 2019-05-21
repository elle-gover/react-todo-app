import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core";

//types
type AddItemProps = {
    [key: string]: any;
}

const style = {
    addButtonRoot: {
        display: "flex",
        justifyContent: "flex-end"
    }
}

class AddItem extends React.Component<AddItemProps> {

    state = {
        showAddButton: true
    }

    handleClickAddButton() {
        this.setState({ showAddButton: false })
    }

    render() {
        if (this.state.showAddButton) {
            return (
                <div className={this.props.classes.addButtonRoot}>
                    <Fab onClick={this.handleClickAddButton.bind(this)}>
                        <AddIcon />
                    </Fab>
                </div>

            );
        } else {
            return <TextField fullWidth placeholder="Type your todo"/>
        }
        
    }
}

export default withStyles(style)(AddItem);
