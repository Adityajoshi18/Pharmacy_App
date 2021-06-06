import React from 'react'
import Upcoming_Events_Display_Form from "./Upcoming_Events_Display_Form";
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Upcoming_Events_Display() {

    const classes = useStyles();

    return (
        <>
            <PageHeader
                title="Upcoming Events"
                subTitle="Enter date to check upcoming events"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <Upcoming_Events_Display_Form />
            </Paper> 
        </>
    )
}