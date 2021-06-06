import React, { useState, useEffect, Fragment } from 'react'
import { Grid } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm_Patient_Event_Add,Form } from '../../components/useForm_Patient_Event_Add';


const eventItems = [
    { id: 'welcome call', title: 'Welcome Call' },
    { id: 'on demand call', title: 'On Demand Call' },
    { id: 'doctor checkin', title: 'Doctor Checkin' },
    { id: 'prescription refill', title: 'Prescription Refill' },
    { id: 'specialist call', title: 'Specialist Call' },
    { id: 'other', title: 'Other' },
]

const initialFValues = {
	Next_Event_Type: '',
	Next_Event_Description: '',
	Next_Event_Date: '',
	Prep_Notes_Next_Event: ''
}

export default function Patient_Event_Add_Form(props) {

	const { recordForEditnew } = props


	const {
        values,
        setValues,
        handleInputChange,
        resetForm
    } = useForm_Patient_Event_Add(initialFValues);

    const handleSubmit = e => {
        e.preventDefault()
        fetch('/patientseventadd', {
            method: 'POST',
            body: JSON.stringify({
            	Patient_ID: values.Patient_ID,
            	Next_Event_Type: values.Next_Event_Type,
            	Next_Event_Description: values.Next_Event_Description,
            	Next_Event_Date: values.Next_Event_Date,
           		Prep_Notes_Next_Event: values.Prep_Notes_Next_Event
           	}),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => {

           console.log(response)
          })
        window.alert('Thank you for submitting details')   
        resetForm()


            
    }

    useEffect(() => {
        if (recordForEditnew != null)
            setValues({
                ...recordForEditnew
            })
    }, [recordForEditnew])

    return (
        
           
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
	                <Controls.Input
	                    label="Patient ID"
	                    name="Patient_ID"
	                    value={values.Patient_ID}
	                    onChange ={handleInputChange}
	                    
	                />
	                <Controls.RadioGroup
	                    label="Next event type"
	                    name="Next_Event_Type"
	                    value={values.Next_Event_Type}
	                    onChange={handleInputChange}
	                    items={eventItems}
	                />
	                <Controls.Input
	                    label="Next event description"
	                    name="Next_Event_Description"
	                    value={values.Next_Event_Description}
	                    onChange ={handleInputChange}
	                    
	                />
	                <div>
	                    <label>
	                        <p>Next event date :</p>
	                        <input type='date'  
	                            
	                            name="Next_Event_Date" 
	                            value={values.Next_Event_Date}
	                            onChange={handleInputChange}
	                        />
	                    </label>
	                </div>
	                <Controls.Input
	                    label="Prep notes next event"
	                    name="Prep_Notes_Next_Event"
	                    value={values.Prep_Notes_Next_Event}
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