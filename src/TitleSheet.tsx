import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
const moment = require('moment');

function TitleSheet() {
    const date = Date.now();

    return (
        <div>
            <Paper elevation={1}>
                <Typography variant="h5" component="h3">
                Today is {moment(date).format("dddd, MMMM Do YYYY, h:mm a")}
                </Typography>
                <Typography component="p">
                    Add your to-do to the list below
                </Typography>
            </Paper>
        </div>
    );
}

export default TitleSheet;