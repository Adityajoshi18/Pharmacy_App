import React, { useState, useEffect, Fragment } from 'react'
import { Grid } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm_Registration,Form } from '../../components/useForm_Registration';
// import { TextField } from '@material-ui/core';

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
    FirstName: '',
    FamilyName: '',
    DateOfBirth: '',
    Gender: 'male',
    PhoneNumber: '',
    WhatsAppNumber: '',
    Email: '',
    Address: '',
    EmergencyContact: '',
    EmergencyContactNumber: '',
    Weight: '',
    Height: '',
    Profession: '',
    PhysicianName: '',
    PhysicianContactNumber: '',
    PhysicianAddress: '',
    Lastdatevisitedaphysician: '',
    Lasttimevisitedaphysicianother: '',
    Howoftendoyouvisitphysician: '',
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
    Howwouldyourateyourdiet: '',
    Howwouldyourateyoursleep: '',
    Diet: '',
    Ayurveda: '',
    Meditation: '',
    Yoga: '',
    Workoutsessions: '',
    WalkingorJogging: '',
    OtherPleaselist: '',
    // directors_array: ["director-0"]


    
    // showPatientInfo: false,
    // patientInfo: {}
}

export default function Patient_Registration_Form() {





    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('FirstName' in fieldValues)
            temp.FirstName = fieldValues.FirstName ? "" : "This field is required."
        if ('FamilyName' in fieldValues)
            temp.FamilyName = fieldValues.FamilyName ? "" : "This field is required."
        if ('PhoneNumber' in fieldValues)
            temp.PhoneNumber = fieldValues.PhoneNumber.length > 9 ? "" : "Minimum 10 numbers required."
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
    } = useForm_Registration(initialFValues, true, validate );

    const [inputFields, setInputFields] = useState([
        { MedicineName: '', MedicineDose: '', MedicneTimeORDay: '', TimesinceprescibedValue: '', TimesinceprescibedUnit: '', PrecriptionRemarks: '', PrescriptionAvialableYesOrNo: '' }
    ]);

    const handleMedicineChange = (index, event) => {
        const values = [...inputFields];
        if (event.target.name === "MedicineName") {
            values[index].MedicineName = event.target.value;
        } else if (event.target.name === "MedicineDose") {
            values[index].MedicineDose = event.target.value;
        } else if (event.target.name === "MedicneTimeORDay") {
            values[index].MedicneTimeORDay = event.target.value;
        } else if (event.target.name === "TimesinceprescibedValue") {
            values[index].TimesinceprescibedValue = event.target.value;
        } else if (event.target.name === "TimesinceprescibedUnit") {
            values[index].TimesinceprescibedUnit = event.target.value;
        } else if (event.target.name === "PrecriptionRemarks") {
            values[index].PrecriptionRemarks = event.target.value;
        } else {
            values[index].PrescriptionAvialableYesOrNo = event.target.value;
        }

        setInputFields(values);
    };

    const handleAddFields = () => {
        const values = [...inputFields];
        values.push({ MedicineName: '', MedicineDose: '', MedicneTimeORDay: '', TimesinceprescibedValue: '', TimesinceprescibedUnit: '', PrecriptionRemarks: '', PrescriptionAvialableYesOrNo: '' });
        setInputFields(values);
    };

    const handleRemoveFields = index => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };

    let request = {

    }


     

    const handleSubmit = e => {
        e.preventDefault()
        console.log(inputFields)
        console.log(JSON.stringify(inputFields))
        console.log(typeof(inputFields))
        if (validate()){

            fetch('/Patient_Registration', {
                method: 'POST',
                body: JSON.stringify({




              

                    FirstName: values.FirstName,
                    FamilyName: values.FamilyName,
                    DateOfBirth: values.DateOfBirth,
                    Gender: values.Gender,
                    PhoneNumber: values.PhoneNumber,
                    WhatsAppNumber: values.WhatsAppNumber,
                    Email: values.Email,
                    Address: values.Address,
                    EmergencyContact: values.EmergencyContact,
                    EmergencyContactNumber: values.EmergencyContactNumber,
                    Weight: values.Weight,
                    Height: values.Height,
                    Profession: values.Profession,
                    PhysicianName: values.PhysicianName,
                    PhysicianContactNumber: values.PhysicianContactNumber,
                    PhysicianAddress: values.PhysicianAddress,
                    Lastdatevisitedaphysician: values.Lastdatevisitedaphysician,
                    Lasttimevisitedaphysicianother: values.Lasttimevisitedaphysicianother,
                    Howoftendoyouvisitphysician: values.Howoftendoyouvisitphysician,
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
                    Howwouldyourateyourdiet: values.Howwouldyourateyourdiet,
                    Howwouldyourateyoursleep: values.Howwouldyourateyoursleep,
                    Diet: values.Diet,
                    Ayurveda: values.Ayurveda,
                    Meditation: values.Meditation,
                    Yoga: values.Yoga,
                    Workoutsessions: values.Workoutsessions,
                    WalkingorJogging: values.WalkingorJogging,
                    OtherPleaselist: values.OtherPleaselist
                    
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
    }

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
                        label="First Name"
                        name="FirstName"
                        value={values.FirstName}
                        onChange ={handleInputChange}
                        error={errors.FirstName}
                    />
                    <Controls.Input

                        label="Family Name"
                        name="FamilyName"
                        value={values.FamilyName}
                        onChange={handleInputChange}
                        error={errors.FamilyName}
                    />
                    <div>
                        <label>
                            <p>Date Of Birth :</p>
                            <input type='date'  
                                label="Date Of Birth"
                                name="DateOfBirth" 
                                value={values.DateOfBirth}
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
                        name="PhoneNumber"
                        value={values.PhoneNumber}
                        onChange={handleInputChange}
                        error={errors.PhoneNumber}
                        
                    />
                    <Controls.Input
                        label="WhatsApp Number"
                        name="WhatsAppNumber"
                        value={values.WhatsAppNumber}
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
                        name="EmergencyContact"
                        value={values.EmergencyContact}
                        onChange={handleInputChange}
                        
                    />
                    <Controls.Input
                        label="Emergency Contact Number"
                        name="EmergencyContactNumber"
                        value={values.EmergencyContactNumber}
                        onChange={handleInputChange}
                        
                    />
                    <Controls.Input
                        label="Weight"
                        name="Weight"
                        value={values.Weight}
                        onChange={handleInputChange}
                        
                    />
                    <Controls.Input
                        label="Height"
                        name="Height"
                        value={values.Height}
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
                        name="PhysicianName"
                        value={values.PhysicianName}
                        onChange={handleInputChange}
                        
                    />
                    <Controls.Input
                        label="Physician Contact Number"
                        name="PhysicianContactNumber"
                        value={values.PhysicianContactNumber}
                        onChange={handleInputChange}
                        
                    />
                    <Controls.Input
                        label="Physician Address"
                        name="PhysicianAddress"
                        value={values.PhysicianAddress}
                        onChange={handleInputChange}
                        
                    />
                    <div>
                        <label>
                            <p>Last date visited a physician :</p>
                            <input type='date'  
                                label="Last date visited a physician :"
                                name="Lastdatevisitedaphysician" 
                                value={values.Lastdatevisitedaphysician}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <Controls.Input
                        label="Last time visited a physician other"
                        name="Lasttimevisitedaphysicianother"
                        value={values.Lasttimevisitedaphysicianother}
                        onChange={handleInputChange}
                        
                    />
                    <Controls.RadioGroup
                        label="How often do you visit physician"
                        name="Howoftendoyouvisitphysician"
                        value={values.Howoftendoyouvisitphysician}
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
                        name="Howwouldyourateyourdiet"
                        value={values.Howwouldyourateyourdiet}
                        onChange={handleInputChange}
                        items={rateItems}
                    />
                    <Controls.RadioGroup
                        label="How would you rate your sleep"
                        name="Howwouldyourateyoursleep"
                        value={values.Howwouldyourateyoursleep}
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
                        name="Workoutsessions"
                        value={values.Workoutsessions}
                        onChange={handleInputChange}
                        items={healthboostingItems}
                    />
                    <Controls.RadioGroup
                        label="Walking or Jogging ?"
                        name="WalkingorJogging"
                        value={values.WalkingorJogging}
                        onChange={handleInputChange}
                        items={healthboostingItems}
                    />
                    <Controls.Input
                        label="Other Please list"
                        name="OtherPleaselist"
                        value={values.OtherPleaselist}
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


// <h2>If yes,upload prescription</h2>
//                                         <TextField

//                                           name="upload-photo"
//                                           type="file"
//                                         />

