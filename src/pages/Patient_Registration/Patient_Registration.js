import React from 'react'
import Patient_Registration_Form from "./Patient_Registration_Form";
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Patient_Registration() {

    const classes = useStyles();

    return (
        <>
            <PageHeader
                title="Registration Form"
                subTitle="Please enter the details"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <Patient_Registration_Form />
            </Paper>
        </>
    )
}