import React, { useState, useEffect, Fragment } from 'react'
import { Grid } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm_Patient_Details_Edit,Form } from '../../components/useForm_Patient_Details_Edit';
// import InputAdornment from "@material-ui/core/InputAdornment";
// import Tooltip from "@material-ui/core/Tooltip";




 
const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]
const physicianvisitItems = [
    { id: 'once a week', title: 'Once a week' },
    { id: 'twice a month', title: 'Twice a month' },
    { id: 'once a month', title: 'Once a month' },
    { id: 'once in 2 months', title: 'Once in 2 months' },
    { id: 'rarely', title: 'Rarely' },
    { id: 'as needed', title: 'As needed' },
]
const lifestyleItems = [
    { id: 'no', title: 'No' },
    { id: 'occational', title: 'Occational' },
    { id: '1-2 per day', title: '1 to 2 Per Day' },
    { id: 'more than 2', title: 'More than 2' },
]
const stressItems = [
    { id: 'no stress', title: 'No Stress' },
    { id: 'mild', title: 'Mild' },
    { id: 'heavy', title: 'Heavy' },
]
const exerciseItems = [
    { id: 'yes', title: 'Yes' },
    { id: 'no', title: 'No' },
]
const rateItems = [
    { id: 'good', title: 'Good' },
    { id: 'fair', title: 'Fair' },
    { id: 'poor', title: 'Poor' },
]
const healthboostingItems = [
    { id: 'not interested', title: 'Not interested' },
    { id: 'interested', title: 'Interested' },
    { id: 'very interested', title: 'Very Interested' },
    { id: 'already engaged', title: 'Already Engaged' },
]
const prescriptionavailableItems = [
    { id: 'yes', title: 'Yes' },
    { id: 'no', title: 'No' },
]



const initialFValues = {
    // id: 0,
    First_Name: '',
    Family_Name: '',
    Date_Of_Birth: new Date(),
    Gender: 'male',
    Phone_Number: '',
    WhatsApp_Number: '',
    Email: '',
    Address: '',
    Emergency_Contact: '',
    Emergency_Contact_Number: '',
    Weight: '',
    Height: '',
    Profession: '',
    Physician_Name: '',
    Physician_Contact_Number: '',
    Physician_Address: '',
    Last_date_visited_a_physician: new Date(),
    Last_time_visited_a_physician_other: '',
    How_often_do_you_visit_physician: '',
    // MedicineName: '',
    // MedicineDose: '',
    // MedicneTimeORDay: '',
    // TimesinceprescibedValue: '',
    // TimesinceprescibedUnit: '',
    // PrecriptionRemarks: '',
    // PrescriptionAvialableYesOrNo: '',
    Smoker: '',
    Alcohol: '',
    Stress: '',
    Exercise: '',
    How_would_you_rate_your_diet: '',
    How_would_you_rate_your_sleep: '',
    Diet: '',
    Ayurveda: '',
    Meditation: '',
    Yoga: '',
    Workout_sessions: '',
    Walking_or_Jogging: '',
    Other_Please_list: ''
    


    
    // showPatientInfo: false,
    // patientInfo: {}
}

export default function Patient_Details_Edit_Form(props) {

    const { recordForEdit } = props





    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('First_Name' in fieldValues)
            temp.First_Name = fieldValues.First_Name ? "" : "This field is required."
        if ('Family_Name' in fieldValues)
            temp.Family_Name = fieldValues.Family_Name ? "" : "This field is required."
        if ('Phone_Number' in fieldValues)
            temp.Phone_Number = fieldValues.Phone_Number.length > 9 ? "" : "Minimum 10 numbers required."
        if ('Email' in fieldValues)
            temp.Email = (/$^|.+@.+..+/).test(fieldValues.Email) ? "" : "Email is not valid."

        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }
            

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm_Patient_Details_Edit(initialFValues, true, validate );

    const [inputFields, setInputFields] = useState([
        { Medicine_Name: '', Medicine_Dose: '', Medicine_Time_Day: '', Time_since_prescibed_Value: '', Time_since_prescibed_Unit: '', Precription_Remarks: '', Prescription_Available_YesOrNo: '' }
    ]);

    const handleMedicineChange = (index, event) => {
        const values = [...inputFields];
        if (event.target.name === "Medicine_Name") {
            values[index].Medicine_Name = event.target.value;
        } else if (event.target.name === "Medicine_Dose") {
            values[index].Medicine_Dose = event.target.value;
        } else if (event.target.name === "Medicine_Time_Day") {
            values[index].Medicine_Time_Day = event.target.value;
        } else if (event.target.name === "Time_since_prescibed_Value") {
            values[index].Time_since_prescibed_Value = event.target.value;
        } else if (event.target.name === "Time_since_prescibed_Unit") {
            values[index].Time_since_prescibed_Unit = event.target.value;
        } else if (event.target.name === "Precription_Remarks") {
            values[index].Precription_Remarks = event.target.value;
        } else {
            values[index].Prescription_Available_YesOrNo = event.target.value;
        }

        setInputFields(values);
    };

    const handleAddFields = () => {
        const values = [...inputFields];
        values.push({ Medicine_Name: '', Medicine_Dose: '', Medicine_Time_Day: '', Time_since_prescibed_Value: '', Time_since_prescibed_Unit: '', Precription_Remarks: '', Prescription_Available_YesOrNo: '' });
        setInputFields(values);
    };

    const handleRemoveFields = index => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };

     

    const handleSubmit = e => {
        e.preventDefault()
        console.log(inputFields)
        console.log(JSON.stringify(inputFields))
        console.log(typeof(inputFields))
        if (validate()){

            fetch('/patientsedit', {
                method: 'POST',
                body: JSON.stringify({




              
                    Patient_ID: values.Patient_ID,
                    First_Name: values.First_Name,
                    Family_name: values.Family_name,
                    Date_of_Birth: values.Date_of_Birth,
                    Gender: values.Gender,
                    Phone_Number: values.Phone_Number,
                    WhatsApp_Number: values.WhatsApp_Number,
                    Email: values.Email,
                    Address: values.Address,
                    Emergency_Contact: values.Emergency_Contact,
                    Emergency_Contact_Number: values.Emergency_Contact_Number,
                    Weight_in_cms: values.Weight_in_cms,
                    Height_in_kgs: values.Height_in_kgs,
                    Profession: values.Profession,
                    Physician_Name: values.Physician_Name,
                    Physician_Contact_Number: values.Physician_Contact_Number,
                    Physician_Address: values.Physician_Address,
                    Last_date_visited_a_physician: values.Last_date_visited_a_physician,
                    Last_time_visited_a_physician_other: values.Last_time_visited_a_physician_other,
                    How_often_do_you_visit_physician: values.How_often_do_you_visit_physician,
                    MedicationList: inputFields,
                    // MedicineName: inputFields[0].MedicineName,
                    // MedicineDose: inputFields[0].MedicineDose,
                    // MedicneTimeORDay: inputFields[0].MedicneTimeORDay,
                    // TimesinceprescibedValue: inputFields[0].TimesinceprescibedValue,
                    // TimesinceprescibedUnit: inputFields[0].TimesinceprescibedUnit,
                    // PrecriptionRemarks: inputFields[0].PrecriptionRemarks,
                    // PrescriptionAvialableYesOrNo: inputFields[0].PrescriptionAvialableYesOrNo,
                    Smoker: values.Smoker,
                    Alcohol: values.Alcohol,
                    Stress: values.Stress,
                    Exercise: values.Exercise,
                    How_would_you_rate_your_diet: values.How_would_you_rate_your_diet,
                    How_would_you_rate_your_sleep: values.How_would_you_rate_your_sleep,
                    Diet: values.Diet,
                    Ayurveda: values.Ayurveda,
                    Meditation: values.Meditation,
                    Yoga: values.Yoga,
                    Workout_sessions: values.Workout_sessions,
                    Walking_or_Jogging: values.Walking_or_Jogging,
                    Other_Please_list: values.Other_Please_list
                    
                }),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
            }).then((response) => {

               console.log(response)
              })
            window.alert('Thank you for submitting details')   
            


                
        }    
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

    // appendInput_director(); {
    //     var newInput = `director-${this.state.directors_array.length}`;
    //     console.log(this.state.directors_array.concat([newInput]));
    //     this.setState(prevState => ({
    //         directors_array: prevState.directors_array.concat([newInput])
    //     }));
    // }

    return (
        
           
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <h1>Member Info</h1>

                    <Controls.Input
                        label="Patient ID"
                        name="Patient_ID"
                        value={values.Patient_ID}
                        onChange ={handleInputChange}
                        
                    />
                    <Controls.Input
                        label="First Name"
                        name="First_Name"
                        value={values.First_Name}
                        onChange ={handleInputChange}
                        error={errors.FirstName}
                    />
                    <Controls.Input

                        label="Family Name"
                        name="Family_name"
                        value={values.Family_name}
                        onChange={handleInputChange}
                        error={errors.Family_Name}
                    />
                    <div>
                        <label>
                            <p>Date Of Birth :</p>
                            <input type='date'  
                                
                                name="Date_of_Birth" 
                                value={values.Date_of_Birth}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    
                    <Controls.RadioGroup
                        label="Gender"
                        name="Gender"
                        value={values.Gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />

                    <Controls.Input
                        label="Phone Number"
                        name="Phone_Number"
                        value={values.Phone_Number}
                        onChange={handleInputChange}
                        error={errors.Phone_Number}
                        
                    />
                    <Controls.Input
                        label="WhatsApp Number"
                        name="WhatsApp_Number"
                        value={values.WhatsApp_Number}
                        onChange={handleInputChange}
                        
                    />
                    <Controls.Input
                        label="Email"
                        name="Email"
                        value={values.Email}
                        onChange={handleInputChange}
                        error={errors.Email}


                        
                    />
                    <Controls.Input
                        label="Address"
                        name="Address"
                        value={values.Address}
                        onChange={handleInputChange}
                        
                    />
                    <Controls.Input
                        label="Emergency Contact"
                        name="Emergency_Contact"
                        value={values.Emergency_Contact}
                        onChange={handleInputChange}
                        
                    />
                    <Controls.Input
                        label="Emergency Contact Number"
                        name="Emergency_Contact_Number"
                        value={values.Emergency_Contact_Number}
                        onChange={handleInputChange}
                        
                    />
                    <Controls.Input
                        label="Weight"
                        name="Weight_in_cms"
                        value={values.Weight_in_cms}
                        onChange={handleInputChange}
                        
                    />
                    <Controls.Input
                        label="Height"
                        name="Height_in_kgs"
                        value={values.Height_in_kgs}
                        onChange={handleInputChange}
                        
                    />
                    <Controls.Input
                        label="Profession"
                        name="Profession"
                        value={values.Profession}
                        onChange={handleInputChange}
                        
                    />

                    <h1>Physician Info</h1>

                    <Controls.Input
                        label="Physician Name"
                        name="Physician_Name"
                        value={values.Physician_Name}
                        onChange={handleInputChange}
                        
                    />
                    <Controls.Input
                        label="Physician Contact Number"
                        name="Physician_Contact_Number"
                        value={values.Physician_Contact_Number}
                        onChange={handleInputChange}
                        
                    />
                    <Controls.Input
                        label="Physician Address"
                        name="Physician_Address"
                        value={values.Physician_Address}
                        onChange={handleInputChange}
                        
                    />
                    <div>
                        <label>
                            <p>Last date visited a physician :</p>
                            <input type='date'  
                                
                                name="Last_date_visited_a_physician" 
                                value={values.Last_date_visited_a_physician}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    
                    <Controls.Input
                        label="Last time visited a physician other"
                        name="Last_time_visited_a_physician_other"
                        value={values.Last_time_visited_a_physician_other}
                        onChange={handleInputChange}
                        
                    />
                    <Controls.RadioGroup
                        label="How often do you visit physician"
                        name="How_often_do_you_visit_physician"
                        value={values.How_often_do_you_visit_physician}
                        onChange={handleInputChange}
                        items={physicianvisitItems}
                    />

                    <h1>Current Medications</h1>
                    
                         <div>

                            {inputFields.map((inputField, index) => (
                                <Fragment key={`${inputField}~${index}`}>
                                    <div>

                                        <Controls.Input
                                            label="Medicine Name"
                                            name="MedicineName"
                                            value={inputField.MedicineName}
                                            onChange={event => handleMedicineChange(index, event)}
                                    
                                        />
                                        <Controls.Input
                                            label="Medicine Dose"
                                            name="MedicineDose"
                                            value={inputField.MedicineDose}
                                            onChange={event => handleMedicineChange(index, event)}
                                    
                                        />
                                        <Controls.Input
                                            label="Medicne Time OR Day"
                                            name="MedicneTimeORDay"
                                            value={inputField.MedicneTimeORDay}
                                            onChange={event => handleMedicineChange(index, event)}
                                    
                                        />
                                        <Controls.Input
                                            label="Time since prescibed Value"
                                            name="TimesinceprescibedValue"
                                            value={inputField.TimesinceprescibedValue}
                                            onChange={event => handleMedicineChange(index, event)}
                                            
                                        />
                                        <Controls.Input
                                            label="Time since prescibed Unit"
                                            name="TimesinceprescibedUnit"
                                            value={inputField.TimesinceprescibedUnit}
                                            onChange={event => handleMedicineChange(index, event)}
                                            
                                        />
                                        <Controls.Input
                                            label="Precription Remarks"
                                            name="PrecriptionRemarks"
                                            value={inputField.PrecriptionRemarks}
                                            onChange={event => handleMedicineChange(index, event)}
                                            
                                        />
                                        <Controls.RadioGroup
                                            label="Prescription Available ?"
                                            name="PrescriptionAvialableYesOrNo"
                                            value={inputField.PrescriptionAvialableYesOrNo}
                                            onChange={event => handleMedicineChange(index, event)}
                                            items={prescriptionavailableItems}
                                        />
                                    </div>
                                    <div>
                                        <Controls.Button
                                        text="Add another medication"
                                        color="default"
                                        onClick={() => handleAddFields()} />
                                        <Controls.Button
                                        text="Remove"
                                        color="default"
                                        onClick={() => handleRemoveFields(index)} />
                                    
                                    </div>    
                                
                                </Fragment>
                            ))}
                        </div>
                    


                  

                    <h1>Lifestyle</h1>

                    <Controls.RadioGroup
                        label="Smoker"
                        name="Smoker"
                        value={values.Smoker}
                        onChange={handleInputChange}
                        items={lifestyleItems}
                    />
                    <Controls.RadioGroup
                        label="Alcohol"
                        name="Alcohol"
                        value={values.Alcohol}
                        onChange={handleInputChange}
                        items={lifestyleItems}
                    />
                    <Controls.RadioGroup
                        label="Stress"
                        name="Stress"
                        value={values.Stress}
                        onChange={handleInputChange}
                        items={stressItems}
                    />
                    <Controls.RadioGroup
                        label="Exercise"
                        name="Exercise"
                        value={values.Exercise}
                        onChange={handleInputChange}
                        items={exerciseItems}
                    />
                    <Controls.RadioGroup
                        label="How would you rate your diet"
                        name="How_would_you_rate_your_diet"
                        value={values.How_would_you_rate_your_diet}
                        onChange={handleInputChange}
                        items={rateItems}
                    />
                    <Controls.RadioGroup
                        label="How would you rate your sleep"
                        name="How_would_you_rate_your_sleep"
                        value={values.How_would_you_rate_your_sleep}
                        onChange={handleInputChange}
                        items={rateItems}
                    />

                    <h1>Interest in Health Boosting Activities</h1>

                    <Controls.RadioGroup
                        label="Diet"
                        name="Diet"
                        value={values.Diet}
                        onChange={handleInputChange}
                        items={healthboostingItems}
                    />
                    <Controls.RadioGroup
                        label="Ayurveda"
                        name="Ayurveda"
                        value={values.Ayurveda}
                        onChange={handleInputChange}
                        items={healthboostingItems}
                    />
                    <Controls.RadioGroup
                        label="Meditation"
                        name="Meditation"
                        value={values.Meditation}
                        onChange={handleInputChange}
                        items={healthboostingItems}
                    />
                    <Controls.RadioGroup
                        label="Yoga"
                        name="Yoga"
                        value={values.Yoga}
                        onChange={handleInputChange}
                        items={healthboostingItems}
                    />
                    <Controls.RadioGroup
                        label="Interest in Workout sessions"
                        name="Workout_sessions"
                        value={values.Workout_sessions}
                        onChange={handleInputChange}
                        items={healthboostingItems}
                    />
                    <Controls.RadioGroup
                        label="Walking or Jogging ?"
                        name="Walking_or_Jogging"
                        value={values.Walking_or_Jogging}
                        onChange={handleInputChange}
                        items={healthboostingItems}
                    />
                    <Controls.Input
                        label="Other Please list"
                        name="Other_Please_list"
                        value={values.Other_Please_list}
                        onChange={handleInputChange}
                        
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

