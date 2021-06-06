import React from 'react'
import Patient_Event_Add_And_Edit_Form from "./Patient_Event_Add_And_Edit_Form";
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Patients_Event_Add_And_Edit() {

    const classes = useStyles();

    return (
        <>
            <PageHeader
                title="Registration Form"
                subTitle="Please enter the details"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <Patient_Event_Add_And_Edit_Form />
            </Paper> 
        </>
    )
}