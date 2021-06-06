import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm_Patient_Event_Add_And_Edit,Form } from '../../components/useForm_Patient_Event_Add_And_Edit';
import { Paper,makeStyles } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';
import Popup_New_Event from "../../components/Popup_New_Event";
import Popup_Edit_Event from "../../components/Popup_Edit_Event";
import Patient_Event_Add_Form from "./Patient_Event_Add_Form";
import Patient_Event_Edit_Form from "./Patient_Event_Edit_Form";

const initialFValues = {
	PatientID: '',
	EventID: '',
	Event_notes: '',
	Event_Status: '' 
}

const useStyles = makeStyles(theme => ({
    cardContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Patient_Event_Add_And_Edit_Form() {

    const [placeholder, setPlaceholder] = useState([]);
    const [placeholdernew, setPlaceholdernew] = useState([]);
    const [openPopupnew, setOpenPopupnew] = useState(false)
    const [recordForEditnew, setRecordForEditnew] = useState(null)
    const [openPopupedit, setOpenPopupedit] = useState(false)
    const [recordForEditevent, setRecordForEditevent] = useState(null)

    const {
 		values,
        setValues,
        handleInputChange, 
        resetForm
    } = useForm_Patient_Event_Add_And_Edit(initialFValues);

    const handleSubmit = e => {
    	e.preventDefault()
    	fetch('/patientandevent', {
                method: 'POST',
                body: JSON.stringify({
                	PatientID: values.PatientID,
                	EventID: values.EventID
                }),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
            }).then(response => response.json())
      // Displaying the output below the form after pressing submit button
              .then(data => {
                setPlaceholder(data.result)
                setPlaceholdernew(data.resultnew)
              })
            window.alert('Thank you for submitting details')   
            resetForm()
        
    }

    

    const handleItemClick = item => {
        console.log('item', item)
    }

    const classes = useStyles();

    const openInPopupedit = item =>{
        setRecordForEditevent(item)
        setOpenPopupedit(true)
    }

    const openInPopupnew = item =>{
        setRecordForEditnew(item)
        setOpenPopupnew(true)
    }

    return (
    <>
        
    

        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
	                <Controls.Input
	                    label="Patient ID"
	                    name="PatientID"
	                    value={values.PatientID}
	                    onChange ={handleInputChange}
	                />
                </Grid>
                <Grid item xs={6}>

	                <Controls.Input
						label="Event ID"
						name="EventID"
						value={values.EventID}
						onChange ={handleInputChange}
					/>
                </Grid>

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
	    </Form>
	    <div>
            <Grid container>
                <Grid item xs={6}>
            
                    {placeholder.map((item, index) => (
                        <div key={index} index={index} onClick={() => handleItemClick(item)}>
                            <Card style={{ width: "500px"}}>
                                <CardContent align="center ">
                                <h1>Patient Information</h1>
                                    <div><p>First Name:   {item.First_Name}</p></div>
                                    <div><p>Family Name:   {item.Family_name}</p></div>
                                    <div><p>Date Of Birth:   {item.Date_of_Birth}</p></div>
                                    <div><p>Gender:   {item.Gender}</p></div>
                                    <div><p>Phone Number:   {item.Phone_Number}</p></div>
                                    <div><p>Whatsapp Number:   {item.WhatsApp_Number}</p></div>
                                    <div><p>Email:   {item.Email}</p></div>
                                    <div><p>Address:   {item.Address}</p></div>
                                    <div><p>Emergency Contact:   {item.Emergency_Contact}</p></div>
                                    <div><p>Emergency Contact Number:   {item.Emergency_Contact_Number}</p></div>
                                    <div><p>Weight in kgs:   {item.Weight_in_cms}</p></div>
                                    <div><p>Height in cms:   {item.Height_in_kgs}</p></div>
                                    <div><p>Profession:   {item.Profession}</p></div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </Grid>
                <Grid item xs={6}>
                    {placeholdernew.map((item, index) => (
                        <div key={index} index={index} onClick={() => handleItemClick(item)}>
                            <Card style={{ width: "500px"}}>
                                <CardContent align="center ">
                                	<h1>Event Information</h1>
                                	<div><p>Event ID:   {item.Event_ID}</p></div>
                                	<div><p>Patient ID:   {item.Patient_ID}</p></div>
                                    <div><p>Event date:   {item.Event_date}</p></div>
                                    <div><p>Event details:   {item.Event_details}</p></div>
                                    <div><p>Event type:   {item.Event_type}</p></div>
                                    <div><p>Event status:   {item.Event_Status}</p></div>
                                    <div>
                                        <Controls.Button
                                            text="Add notes for the event"
                                            color="default"
                                            onClick = {()=> {openInPopupedit(item)}} />
                                    </div>




                                </CardContent>
                            </Card>
                            <Card style={{ width: "500px"}}>
		                        <CardContent align="center ">
		                        	<div>
		                                <Controls.Button
		                                    text="Add next event"
		                                    color="default"
		                                    onClick = {()=> {openInPopupnew(item)}} />
		                            </div>
		                        </CardContent>
		                    </Card>
                        </div>
                    ))}
                        

                </Grid>
            </Grid>
        </div>
        <Popup_New_Event
            title="Add next event"
            openPopupnew={openPopupnew}
            setOpenPopupnew={setOpenPopupnew}
        >
            <Patient_Event_Add_Form
                recordForEditnew={recordForEditnew} />
        </Popup_New_Event>
        <Popup_Edit_Event
            title="Add notes and update status of the event"
            openPopupedit={openPopupedit}
            setOpenPopupedit={setOpenPopupedit}
        >
            <Patient_Event_Edit_Form
                recordForEditevent={recordForEditevent} />
        </Popup_Edit_Event>
    </>
          
      
	)
}