import React from 'react'
import Patient_Event_Display_Form from "./Patient_Event_Display_Form";
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Patient_Event_Display() {

    const classes = useStyles();

    return (
        <>
            <PageHeader
                title="Patient and event details"
                subTitle="Enter patient ID to get the details"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <Patient_Event_Display_Form />
            </Paper> 
        </>
    )
}