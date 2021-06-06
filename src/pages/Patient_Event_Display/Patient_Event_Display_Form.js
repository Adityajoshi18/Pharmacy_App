import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm_Patient_Event_Display,Form } from '../../components/useForm_Patient_Event_Display';
import { Paper,makeStyles } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';
import Patient_Details_Edit_Form from "./Patient_Details_Edit_Form";
import Popup_Patient_Details_Edit from "../../components/Popup_Patient_Details_Edit";
// // import Popupnew from "../../components/Popupnew";
import Popup_New_Medicine from "../../components/Popup_New_Medicine";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
// import PatientEventAddForm from "./PatientEventAddForm";
import Patient_Medication_Edit_Form from "./Patient_Medication_Edit_Form";




const initialFValues = {
	PatientID: '',
	EventID: '', 
}

// const useStyles = makeStyles(theme => ({
//     root: {
//         '& .MuiFormControl-root': {
//             width: '80%',
//             margin: theme.spacing(1)
//         }
//     }
// }))

const useStyles = makeStyles(theme => ({
    cardContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))



export default function Patient_Event_Display_Form() {

    const [placeholder, setPlaceholder] = useState([]);
    const [placeholdernew, setPlaceholdernew] = useState([]);
    const [placeholdernewmedicine, setPlaceholdernewmedicine] = useState([]);
    const [openPopup, setOpenPopup] = useState(false)
    const [openPopupnew, setOpenPopupnew] = useState(false)
    const [openPopupnewMedicine, setOpenPopupnewMedicine] = useState(false)
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [recordForEditnew, setRecordForEditnew] = useState(null)
    const [recordForEditMedicine, setRecordForEditMedicine] = useState(null)

    // const classes = useStyles();

 	const {
 		values,
        setValues,
        handleInputChange, 
        resetForm
    } = useForm_Patient_Event_Display(initialFValues);

    const handleSubmit = e => {
    	e.preventDefault()
    	fetch('/patients2', {
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
                setPlaceholdernewmedicine(data.resultmedicine)
              })
            window.alert('Thank you for submitting details')   
            resetForm()
        
    }

    const handleItemClick = item => {
        console.log('item', item)
    }

    const classes = useStyles();

    const openInPopup = item =>{
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    const openInPopupnew = item =>{
        setRecordForEditnew(item)
        setOpenPopupnew(true)
    }

    const openInPopupnewMedicine = item =>{
        setRecordForEditMedicine(item)
        setOpenPopupnewMedicine(true)
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
            
                    {placeholder.map((item, index) => (
                        <div key={index} index={index} onClick={() => handleItemClick(item)}>
                            <Card style={{ width: "500px"}}>
                                <CardContent align="center ">
                                    <div>
                                        <Controls.Button
                                            text="Edit patient details"
                                            color="default"
                                            onClick = {()=> {openInPopup(item)}} />
                                            
                                       
                                    </div>
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
                                    <h1>Physician Information</h1>
                                    <div><p>Physician name:  {item.Physician_Name}</p></div>
                                    <div><p>Physician contact number:   {item.Physician_Contact_Number}</p></div>
                                    <div><p>Physician address:   {item.Physician_Address}</p></div>
                                    <div><p>Last date visited a physician:   {item.Last_date_visited_a_physician}</p></div>
                                    <div><p>Last time visited a physician other:   {item.Last_time_visited_a_physician_other}</p></div>
                                    <div><p>How often do you visit physician:   {item.How_often_do_you_visit_physician}</p></div>
                                    <h1>Lifestyle</h1>
                                    <div><p>Smoker:   {item.Smoker}</p></div>
                                    <div><p>Alcohol:   {item.Alcohol}</p></div>
                                    <div><p>Stress:   {item.Stress}</p></div>
                                    <div><p>Exercise:   {item.Exercise}</p></div>
                                    <div><p>How would you rate your diet:   {item.How_would_you_rate_your_diet}</p></div>
                                    <div><p>How would you rate your sleep:   {item.How_would_you_rate_your_sleep}</p></div>
                                    <div><p>Diet:   {item.Diet}</p></div>
                                    <div><p>Ayurveda:   {item.Ayurveda}</p></div>
                                    <div><p>Meditation:   {item.Meditation}</p></div>
                                    <div><p>Yoga:   {item.Yoga}</p></div>
                                    <div><p>Workout sessions:   {item.Workout_sessions}</p></div>
                                    <div><p>Walking or Jogging:   {item.Walking_or_Jogging}</p></div>
                                    <div><p>Other Please list:   {item.Other_Please_list}</p></div>
                                    
                                </CardContent>
                            </Card>
                            

                        </div>
                    ))}
                    {placeholdernewmedicine.map((item, index) => (
                        <div key={index} index={index} onClick={() => handleItemClick(item)}>
                            <Card style={{ width: "500px"}}>
                                <CardContent align="center ">
                                    <div>
                                        <Controls.Button
                                            text="Edit medicine information"
                                            color="default"
                                            onClick = {()=> {openInPopupnewMedicine(item)}} />
                                    </div>
                                    
                                    <h1>Medicine Information</h1>
                                    <div><p>Medicine name:   {item.Medicine_Name}</p></div>
                                    <div><p>Medicine dose:   {item.Medicine_Dose}</p></div>
                                    <div><p>Medicine time day:   {item.Medicine_Time_Day}</p></div>
                                    <div><p>Time since prescibed value:   {item.Time_since_prescibed_Value}</p></div>
                                    <div><p>Time since prescibed unit:   {item.Time_since_prescibed_Unit}</p></div>
                                    <div><p>Precription remarks:   {item.Precription_Remarks}</p></div>
                                    <div><p>Prescription available YesORNo:   {item.Prescription_Available_YesORNo}</p></div>
                                    
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
                                    <div><p>Event date:   {item.Event_date}</p></div>
                                    <div><p>Event details:   {item.Event_details}</p></div>
                                    <div><p>Event type:   {item.Event_type}</p></div>
                                    <div><p>Event status:   {item.Event_Status}</p></div>

                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </Grid>
            </Grid>




            
        </div>
        <Popup_Patient_Details_Edit 
            title="Edit patient details"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
        >  
            <Patient_Details_Edit_Form
                recordForEdit={recordForEdit} />
                 
        </Popup_Patient_Details_Edit>
        
        <Popup_New_Medicine
            title="Edit medicine information"
            openPopupnewMedicine={openPopupnewMedicine}
            setOpenPopupnewMedicine={setOpenPopupnewMedicine}
        >
            <Patient_Medication_Edit_Form
                recordForEditMedicine={recordForEditMedicine} />
        </Popup_New_Medicine>

        
    </>
          
      
	)
}



// <Popup_Patient_Details_Edit 
//             title="Edit patient details"
//             openPopup={openPopup}
//             setOpenPopup={setOpenPopup}
//         >  
//             <Patient_Details_Edit_Form
//                 recordForEdit={recordForEdit} />
                 
//         </Popup_Patient_Details_Edit>
        
//         <Popup_New_Medicine
//             title="Edit medicine information"
//             openPopupnewMedicine={openPopupnewMedicine}
//             setOpenPopupnewMedicine={setOpenPopupnewMedicine}
//         >
//             <Patient_Medication_Edit_Form
//                 recordForEditMedicine={recordForEditMedicine} />
//         </Popup_New_Medicine>
