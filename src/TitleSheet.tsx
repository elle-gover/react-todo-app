import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import "./TitleSheet.css";
import moment from 'moment';

function TitleSheet() {
    const date = Date.now();

    return (
        
        <Paper className="title-sheet-container" elevation={1}>
            
            <Typography className="title-sheet-text" variant="h5" component="h3">
            Today is {moment(date).format("dddd, MMMM Do YYYY, h:mm a")}
            </Typography>
            <Typography className="title-sheet-text" component="p">
                Add your to-do to the list below
            </Typography>
            
        </Paper>
    
    );
}

export default TitleSheet;