import React, { useState, useEffect, Fragment } from 'react'
import { Grid } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm_Patient_Medication_Edit,Form } from '../../components/useForm_Patient_Medication_Edit';

const prescriptionavailableItems = [
    { id: 'yes', title: 'Yes' },
    { id: 'no', title: 'No' },
]

const initialFValues = {
	Medicine_Name: '',
    Medicine_Dose: '',
    Medicine_Time_Day: '',
    Time_since_prescibed_Value: '',
    Time_since_prescibed_Unit: '',
    Precription_Remarks: '',
    Prescription_Available_YesORNo: '',
}

export default function Patient_Medication_Edit_Form(props) {

    const { recordForEditMedicine } = props

    const {
        values,
        setValues,
        handleInputChange,
        resetForm
    } = useForm_Patient_Medication_Edit(initialFValues);

    const handleSubmit = e => {
        e.preventDefault()
        fetch('/patientsmedicine', {
            method: 'POST',
            body: JSON.stringify({
            	Cabinet_ID: values.Cabinet_ID,
            	Medicine_Name: values.Medicine_Name,
            	Medicine_Dose: values.Medicine_Dose,
            	Medicine_Time_Day: values.Medicine_Time_Day,
            	Time_since_prescibed_Value: values.Time_since_prescibed_Value,
            	Time_since_prescibed_Unit: values.Time_since_prescibed_Unit,
            	Precription_Remarks: values.Precription_Remarks,
            	Prescription_Available_YesORNo: values.Prescription_Available_YesORNo
            }),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => {

           console.log(response)
          })
        window.alert('Thank you for submitting details')   
        


            
    }

    useEffect(() => {
        if (recordForEditMedicine != null)
            setValues({
                ...recordForEditMedicine
            })
    }, [recordForEditMedicine])

    return (
        
           
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                	<Controls.Input
	                    label="Cabinet ID"
	                    name="Cabinet_ID"
	                    value={values.Cabinet_ID}
	                    onChange={handleInputChange}
	            
	                />
	                <Controls.Input
	                    label="Medicine Name"
	                    name="Medicine_Name"
	                    value={values.Medicine_Name}
	                    onChange={handleInputChange}
	            
	                />
	                <Controls.Input
	                    label="Medicine Dose"
	                    name="Medicine_Dose"
	                    value={values.Medicine_Dose}
	                    onChange={handleInputChange}
	            
	                />
	                <Controls.Input
	                    label="Medicine Time OR Day"
	                    name="Medicine_Time_Day"
	                    value={values.Medicine_Time_Day}
	                    onChange={handleInputChange}
	            
	                />
	                <Controls.Input
	                    label="Time since prescibed Value"
	                    name="Time_since_prescibed_Value"
	                    value={values.Time_since_prescibed_Value}
	                    onChange={handleInputChange}
	                    
	                />
	                <Controls.Input
	                    label="Time since prescibed Unit"
	                    name="Time_since_prescibed_Unit"
	                    value={values.Time_since_prescibed_Unit}
	                    onChange={handleInputChange}
	                    
	                />
	                <Controls.Input
	                    label="Precription Remarks"
	                    name="Precription_Remarks"
	                    value={values.Precription_Remarks}
	                    onChange={handleInputChange}
	                    
	                />
	                <Controls.RadioGroup
	                    label="Prescription Available ?"
	                    name="Prescription_Available_YesORNo"
	                    value={values.Prescription_Available_YesORNo}
	                    onChange={handleInputChange}
	                    items={prescriptionavailableItems}
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



              