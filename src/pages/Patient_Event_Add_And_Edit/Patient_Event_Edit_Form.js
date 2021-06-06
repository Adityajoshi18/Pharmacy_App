import React, { useState, useEffect, Fragment } from 'react'
import { Grid } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm_Patient_Event_Edit,Form } from '../../components/useForm_Patient_Event_Edit';

const initialFValues = {
	Event_notes: '',
	Event_Status: '' 
}

export default function Patient_Event_Edit_Form(props) {

	const { recordForEditevent } = props

	const {
        values,
        setValues,
        handleInputChange,
        resetForm
    } = useForm_Patient_Event_Edit(initialFValues);

    const handleSubmit = e => {
        e.preventDefault()
        fetch('/patientseventedit', {
            method: 'POST',
            body: JSON.stringify({
            	Event_ID: values.Event_ID,
            	Event_notes: values.Event_notes,
                Event_Status: values.Event_Status
            }),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => {

           console.log(response)
          })
        resetForm()

    }

    useEffect(() => {
        if (recordForEditevent != null)
            setValues({
                ...recordForEditevent
            })
    }, [recordForEditevent])

    return (
        
           
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                	<Controls.Input
	                    label="Event ID"
	                    name="Event_ID"
	                    value={values.Event_ID}
	                    onChange ={handleInputChange}
	                    
	                />
                	<Controls.Input
	                    label="Add notes for the event"
	                    name="Event_notes"
	                    value={values.Event_notes}
	                    onChange ={handleInputChange}
	                />
	                <Controls.Input
	                    label="Event Status"
	                    name="Event_Status"
	                    value={values.Event_Status}
	                    onChange ={handleInputChange}
	                />
	                <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}