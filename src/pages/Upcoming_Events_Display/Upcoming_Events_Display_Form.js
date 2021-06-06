import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core';
import { useForm_Upcoming_Events_Display,Form } from '../../components/useForm_Upcoming_Events_Display';
import { Paper,makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';
import Controls from "../../components/controls/Controls";
// import Popupeditevent from "../../components/Popupeditevent";
// import Popupnew from "../../components/Popupnew";
// // import PatientInfo from './Info'
// import PatientEventEditForm from "./PatientEventEditForm";
// import PatientEventAddForm from "./PatientEventAddForm";
import useTable from "../../components/useTable";


const initialFValues = {
	date: ''
    // showPatientInfo: false
    
}

const useStyles = makeStyles(theme => ({
    cardContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

const headCells = [
    { id: 'Event_ID', label: 'Event ID' },
    { id: 'Patient_ID', label: 'Patient ID' },
    { id: 'Event_date', label: 'Event date' },
    { id: 'Event_details', label: 'Event details' },
    { id: 'Event_type', label: 'Event type' },
    { id: 'Event_Status', label: 'Event Status' },

]

export default function Upcoming_Events_Display_Form() {

	const [placeholder, setPlaceholder] = useState([]);
    const [recordForEditevent, setRecordForEditevent] = useState(null)
    const [openPopupevent, setOpenPopupevent] = useState(false)
    const [recordForEditnew, setRecordForEditnew] = useState(null)
    const [openPopupnew, setOpenPopupnew] = useState(false)
    // const [recordForEditpharmacist, setRecordForEditpharmacist] = useState(null)
    const {
        TblContainer,
        TblHead
    } = useTable(placeholder, headCells);

	const {
 		values,
        setValues,
        handleInputChange, 
        resetForm
    } = useForm_Upcoming_Events_Display(initialFValues);

    const handleSubmit = e => {
    	e.preventDefault()
    	fetch('/Upcomingevents', {
                method: 'POST',
                body: JSON.stringify({
                	date: values.date
                	}),
                	headers: {
	                "Content-type": "application/json; charset=UTF-8"
	                }
            }).then(response => response.json())
    		  .then(data => {
    		  	setPlaceholder(data.result)
    		  })
    }

    const handleItemClick = item => {
    	console.log('item', item)
  	}

  	const classes = useStyles();

    // const openInPopuppharmacist = item =>{
    //     showPatientInfo : true
    //     setRecordForEditpharmacist(item)
    // }
    // const openInPopupnew = item =>{
    //     setRecordForEditnew(item)
    //     setOpenPopupnew(true)
    // }

    // const openInPopupevent = item =>{
    //     setRecordForEditevent(item)
    //     setOpenPopupevent(true)
    // } 

  	return (
        // {showPatientInfo ? <PatientInfo patientInfo={patientInfo}/> :
    <>  
        
    	<Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
	                <div>
	                    <label>
	                        <p>Enter date :</p>
	                        <input type='date'  
	                            
	                            name="date" 
	                            value={values.date}
	                            onChange={handleInputChange}
	                        />
	                    </label>
	                </div>
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
	    <div>
	    	<Grid container>
                <Grid item xs={6}>
                    <TblContainer>
                        <TblHead />
                        <TableBody>
                        	{placeholder.map((item, index) => (
                        		// <div key={index} index={index} onClick={() => handleItemClick(item)}>
                        			<TableRow key={index} index={index} onClick={() => handleItemClick(item)}>
                                        <TableCell>{item.Event_ID}</TableCell>
                                        <TableCell>{item.Patient_ID}</TableCell>
                                        <TableCell>{item.Event_date}</TableCell>
                                        <TableCell>{item.Event_details}</TableCell>
                                        <TableCell>{item.Event_type}</TableCell>
                                        <TableCell>{item.Event_Status}</TableCell>
                                        <TableCell>
                                            <div>
                                                <Controls.Button
                                                    text="Access event"
                                                    color="default" />
                                                     
                                            </div>
                                        </TableCell>


                                    </TableRow>

                                        	
                                        
                            ))}
                        </TableBody>
                    </TblContainer>
                </Grid>
            </Grid>
        </div>
        
        
    </>
        

	)
}