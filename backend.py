from flask import Flask,render_template,request,redirect,session,json,jsonify
from mysql.connector import connect, Error
import yaml
from flask_cors import CORS
import uuid
from datetime import datetime






app = Flask(__name__)
CORS(app)
# app.secret_key = 'Pharmacy_application'

@app.route('/Patient_Registration', methods=['POST'])
def home():
    request_data = json.loads(request.data)
    FirstName = request_data['FirstName']
    FamilyName = request_data['FamilyName']
    DateOfBirth = request_data['DateOfBirth']
    Gender = request_data['Gender']
    PhoneNumber = request_data['PhoneNumber']
    WhatsAppNumber = request_data['WhatsAppNumber']
    Email = request_data['Email']
    Address = request_data['Address']
    EmergencyContact = request_data['EmergencyContact']
    EmergencyContactNumber = request_data['EmergencyContactNumber']
    Weight = request_data['Weight']
    Height = request_data['Height']
    Profession = request_data['Profession']
    PhysicianName = request_data['PhysicianName']
    PhysicianContactNumber = request_data['PhysicianContactNumber']
    PhysicianAddress = request_data['PhysicianAddress']
    Lastdatevisitedaphysician = request_data['Lastdatevisitedaphysician']
    Lasttimevisitedaphysicianother = request_data['Lasttimevisitedaphysicianother']
    Howoftendoyouvisitphysician = request_data['Howoftendoyouvisitphysician']
    MedicationList = request_data['MedicationList']
    # MedicineName = request_data['MedicineName']
    # MedicineDose = request_data['MedicineDose']
    # MedicneTimeORDay = request_data['MedicneTimeORDay']
    # TimesinceprescibedValue = request_data['TimesinceprescibedValue']
    # TimesinceprescibedUnit = request_data['TimesinceprescibedUnit']
    # PrecriptionRemarks = request_data['PrecriptionRemarks']
    # PrescriptionAvialableYesOrNo = request_data['PrescriptionAvialableYesOrNo']
    Smoker = request_data['Smoker']
    Alcohol = request_data['Alcohol']
    Stress = request_data['Stress']
    Exercise = request_data['Exercise']
    Howwouldyourateyourdiet = request_data['Howwouldyourateyourdiet']
    Howwouldyourateyoursleep = request_data['Howwouldyourateyoursleep']
    Diet = request_data['Diet']
    Ayurveda = request_data['Ayurveda']
    Meditation = request_data['Meditation']
    Yoga = request_data['Yoga']
    Workoutsessions = request_data['Workoutsessions']
    WalkingorJogging = request_data['WalkingorJogging']
    OtherPleaselist = request_data['OtherPleaselist']

    

    try: 
        mydb = connect(host = "localhost",
            user = "aditya",
            password = "",
            database = "pharmacy"
            )




        # insert_query = "INSERT INTO Medicine_cabinet(Medicine_Name,Medicine_Dose,Medicine_Time_Day,Time_since_prescibed_Value,Time_since_prescibed_Unit,Precription_Remarks,Prescription_Available_YesORNo) VALUES ( %(MedicineName)s, %(MedicineDose)s, %(MedicneTimeORDay)s, %(TimesinceprescibedValue)s, %(TimesinceprescibedUnit)s, %(PrecriptionRemarks)s, %(PrescriptionAvialableYesOrNo)s);"
                
       

        print(1)
        print(MedicationList)
        print(type(MedicationList))
        # y = json.loads(MedicationList)
        # print(type(y))
        mycursor = mydb.cursor(buffered=True)
        mycursor.execute("SELECT 1 FROM patient WHERE Phone_Number=%s OR Email=%s", (PhoneNumber,Email))

        if mycursor.rowcount == 1:
            print("User already exists")
            mycursor.execute("INSERT INTO patient_duplicate(First_Name, Family_name, Date_of_Birth, Gender, Phone_Number, WhatsApp_Number, Email, Address, Emergency_Contact, Emergency_Contact_Number, Weight_in_cms, Height_in_kgs, Profession, Physician_Name, Physician_Contact_Number, Physician_Address, Last_date_visited_a_physician, Last_time_visited_a_physician_other, How_often_do_you_visit_physician, Smoker, Alcohol, Stress, Exercise, How_would_you_rate_your_diet, How_would_you_rate_your_sleep, Diet, Ayurveda, Meditation, Yoga, Workout_sessions, Walking_or_Jogging, Other_Please_list) VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",(FirstName, FamilyName, DateOfBirth, Gender, PhoneNumber, WhatsAppNumber, Email, Address, EmergencyContact, EmergencyContactNumber, Weight, Height, Profession, PhysicianName, PhysicianContactNumber, PhysicianAddress, Lastdatevisitedaphysician, Lasttimevisitedaphysicianother, Howoftendoyouvisitphysician, Smoker, Alcohol, Stress, Exercise, Howwouldyourateyourdiet, Howwouldyourateyoursleep, Diet, Ayurveda, Meditation, Yoga, Workoutsessions, WalkingorJogging, OtherPleaselist))

            
        else:
            ID = uuid.uuid1()
            String_ID = str(ID)
            mycursor.execute("INSERT INTO patient(Patient_ID, First_Name, Family_name, Date_of_Birth, Gender, Phone_Number, WhatsApp_Number, Email, Address, Emergency_Contact, Emergency_Contact_Number, Weight_in_cms, Height_in_kgs, Profession, Physician_Name, Physician_Contact_Number, Physician_Address, Last_date_visited_a_physician, Last_time_visited_a_physician_other, How_often_do_you_visit_physician, Smoker, Alcohol, Stress, Exercise, How_would_you_rate_your_diet, How_would_you_rate_your_sleep, Diet, Ayurveda, Meditation, Yoga, Workout_sessions, Walking_or_Jogging, Other_Please_list) VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",(String_ID, FirstName, FamilyName, DateOfBirth, Gender, PhoneNumber, WhatsAppNumber, Email, Address, EmergencyContact, EmergencyContactNumber, Weight, Height, Profession, PhysicianName, PhysicianContactNumber, PhysicianAddress, Lastdatevisitedaphysician, Lasttimevisitedaphysicianother, Howoftendoyouvisitphysician, Smoker, Alcohol, Stress, Exercise, Howwouldyourateyourdiet, Howwouldyourateyoursleep, Diet, Ayurveda, Meditation, Yoga, Workoutsessions, WalkingorJogging, OtherPleaselist))
#             query ="INSERT INTO students(Name, Branch,Address) VALUES (%s, %s, %s)"

# ## storing values in a variable
# values = [
#     ("Peter", "ME","Noida"),
#     ("Amy", "CE","New Delhi"),
#     ("Michael", "CSE","London")
# ]                 
            now = datetime.now()
            
            query = "INSERT INTO Patient_Event(Patient_ID, Event_date, Event_details, Event_type) VALUES (%s, %s, %s, %s)"
            values = [
                (String_ID, now.strftime('%Y-%m-%d %H:%M:%S'), "details", "Registration"),
                (String_ID, now.strftime('%Y-%m-%d'), "details", "Post registration review")
            ]

            mycursor.executemany(query, values)
            # mycursor.execute("INSERT INTO Patient_Event(Patient_ID) VALUES(%s)",(String_ID,))
            # mycursor.execute("""
            #     UPDATE Patient_Event
            #     SET Event_date = '2021-06-19', Event_details = 'details', Event_type = 'type', Event_Status = 'status'
            #     WHERE Patient_ID=%s
            # """, (String_ID,))
            for item in MedicationList:

                item.update( {"PatientID":String_ID})
            print(MedicationList)
            # MedicationList = json.dumps(y)

            mycursor.executemany("INSERT INTO Medicine_cabinet(Patient_ID,Medicine_Name,Medicine_Dose,Medicine_Time_Day,Time_since_prescibed_Value,Time_since_prescibed_Unit,Precription_Remarks,Prescription_Available_YesORNo) VALUES ( %(PatientID)s, %(MedicineName)s, %(MedicineDose)s, %(MedicneTimeORDay)s, %(TimesinceprescibedValue)s, %(TimesinceprescibedUnit)s, %(PrecriptionRemarks)s, %(PrescriptionAvialableYesOrNo)s);",MedicationList)
            # mycursor.execute()
            print("Thank you for submitting details")

            


       
        mydb.commit()
        mycursor.close()
        return 'success'
        
    except Error as e:
        print(3, e)
        return("Not done")

@app.route('/Upcomingevents', methods=['POST'])
def home1():
    # Getting the input date as the JSON payload
    request_data = json.loads(request.data)
    #Extracting the input date
    Event_date = request_data['date']
    print(Event_date)

    try: 
        # Connecting with the database
        mydb = connect(host = "localhost",
            user = "aditya",
            password = "",
            database = "pharmacy"
            )
        # Defining the query 
        query = """SELECT *
                    FROM Patient_Event 
                    WHERE (Patient_ID, Event_Date) IN (SELECT Patient_ID, MIN(Event_Date)
                    FROM Patient_Event
                    WHERE Event_date >= '{}'
                    GROUP BY Patient_ID) 
                    ORDER BY Patient_ID, Event_Date ASC""".format(Event_date)

        print(query)
        print(1)
        mycursor = mydb.cursor(dictionary=True)

        mycursor.execute(query)
        #Getting the resultant data
        fetchdata = mycursor.fetchall()

        json1 = json.dumps(fetchdata)
        print(json1)
        print(type(json1))

        mycursor.close()
        # #Returning the data as a dictionary
        dict = {'result':fetchdata}
        # print(dict)
        return dict
    except Error as e:
        print(3, e)
        return("Not done")

@app.route('/patients2', methods=['POST'])
def home2():
    # Getting the input date as the JSON payload
    request_data = json.loads(request.data)
    #Extracting the input date
    PatientID = request_data['PatientID']
    EventID = request_data['EventID']
    

    try: 
        # Connecting with the database
        mydb = connect(host = "localhost",
            user = "aditya",
            password = "",
            database = "pharmacy"
            )

        query = """SELECT *
                   FROM patient
                   WHERE Patient_ID = '{}'""".format(PatientID)

        query_medicine = """SELECT *
                            FROM Medicine_cabinet
                            WHERE Patient_ID = '{}'""".format(PatientID)

        query_event = """SELECT *
                         FROM Patient_Event
                         WHERE Patient_ID = '{}'""".format(PatientID)
        print(query)
        print(1)
        mycursor = mydb.cursor(dictionary=True)

        mycursor.execute(query)

        #Getting the resultant data
        fetchdata = mycursor.fetchall()

        mycursor.execute(query_medicine)

        fetchdata_medicine = mycursor.fetchall()
        print(fetchdata_medicine)
        print(type(fetchdata_medicine))
 
        mycursor.execute(query_event)

        fetchdata_event = mycursor.fetchall()

        # print(fetchdata_medicine)





        # fetchdata = fetchdata_patient.update(fetchdata_medicine)

        



        json1 = json.dumps(fetchdata)
        json2 = json.dumps(fetchdata_event)
        print(json1)
        print(type(json1))

        mycursor.close()
        # #Returning the data as a dictionary
        dict = {'result':fetchdata,'resultnew':fetchdata_event,'resultmedicine':fetchdata_medicine}
        
        # print(dict)
        return dict
    except Error as e:
        print(3, e)
        return("Not done") 

@app.route('/patientsedit', methods=['POST'])
def edit():
    request_data = json.loads(request.data)
    PatientID = request_data['Patient_ID']
    FirstName = request_data['First_Name']
    FamilyName = request_data['Family_name']
    DateOfBirth = request_data['Date_of_Birth']
    Gender = request_data['Gender']
    PhoneNumber = request_data['Phone_Number']
    WhatsAppNumber = request_data['WhatsApp_Number']
    Email = request_data['Email']
    Address = request_data['Address']
    EmergencyContact = request_data['Emergency_Contact']
    EmergencyContactNumber = request_data['Emergency_Contact_Number']
    Weight = request_data['Weight_in_cms']
    Height = request_data['Height_in_kgs']
    Profession = request_data['Profession']
    PhysicianName = request_data['Physician_Name']
    PhysicianContactNumber = request_data['Physician_Contact_Number']
    PhysicianAddress = request_data['Physician_Address']
    Lastdatevisitedaphysician = request_data['Last_date_visited_a_physician']
    Lasttimevisitedaphysicianother = request_data['Last_time_visited_a_physician_other']
    Howoftendoyouvisitphysician = request_data['How_often_do_you_visit_physician']
    MedicationList = request_data['MedicationList']
    # MedicineName = request_data['MedicineName']
    # MedicineDose = request_data['MedicineDose']
    # MedicneTimeORDay = request_data['MedicneTimeORDay']
    # TimesinceprescibedValue = request_data['TimesinceprescibedValue']
    # TimesinceprescibedUnit = request_data['TimesinceprescibedUnit']
    # PrecriptionRemarks = request_data['PrecriptionRemarks']
    # PrescriptionAvialableYesOrNo = request_data['PrescriptionAvialableYesOrNo']
    Smoker = request_data['Smoker']
    Alcohol = request_data['Alcohol']
    Stress = request_data['Stress']
    Exercise = request_data['Exercise']
    Howwouldyourateyourdiet = request_data['How_would_you_rate_your_diet']
    Howwouldyourateyoursleep = request_data['How_would_you_rate_your_sleep']
    Diet = request_data['Diet']
    Ayurveda = request_data['Ayurveda']
    Meditation = request_data['Meditation']
    Yoga = request_data['Yoga']
    Workoutsessions = request_data['Workout_sessions']
    WalkingorJogging = request_data['Walking_or_Jogging']
    OtherPleaselist = request_data['Other_Please_list']

    try: 
        # Connecting with the database
        mydb = connect(host = "localhost",
            user = "aditya",
            password = "",
            database = "pharmacy"
            )

        # query = """UPDATE patient
        #            SET First_Name=%s, Family_Name=%s, Date_Of_Birth=%s, Gender=%s, Phone_Number=%s, WhatsApp_Number=%s, Email=%s, Address=%s, Emergency_Contact=%s, Emergency_Contact_Number=%s, Weight_in_cms=%s, Height_in_kgs=%s, Profession=%s, Physician_Name=%s, Physician_Contact_Number=%s, Physician_Address=%s, Last_date_visited_a_physician=%s, Last_time_visited_a_physician_other=%s, How_often_do_you_visit_physician=%s, Smoker=%s, Alcohol=%s, Stress=%s, Exercise=%s, How_would_you_rate_your_diet=%s, How_would_you_rate_your_sleep=%s, Diet=%s, Ayurveda=%s, Meditation=%s, Yoga=%s, Workout_sessions=%s, Walking_or_Jogging=%s, Other_Please_list=%s
        #            WHERE Patient_ID=%s
        #         """, (FirstName, FamilyName, DateOfBirth, Gender, PhoneNumber, WhatsAppNumber, Email, Address, EmergencyContact, EmergencyContactNumber, Weight, Height, Profession, PhysicianName, PhysicianContactNumber, PhysicianAddress, Lastdatevisitedaphysician, Lasttimevisitedaphysicianother, Howoftendoyouvisitphysician, Smoker, Alcohol, Stress, Exercise, Howwouldyourateyourdiet, Howwouldyourateyoursleep, Diet, Ayurveda, Meditation, Yoga, Workoutsessions, WalkingorJogging, OtherPleaselist)

        # query = """UPDATE patient
        #            SET
        #                First_Name = 'FirstName',
        #                Family_Name = 'FamilyName',
        #                Date_Of_Birth = 'DateOfBirth',
        #                Gender = 'Gender',
        #                Phone_Number = 'PhoneNumber',
        #                WhatsApp_Number = 'WhatsAppNumber',
        #                Email = 'Email',
        #                Address = 'Address',
        #                Emergency_Contact = 'EmergencyContact',
        #                Emergency_Contact_Number = 'EmergencyContactNumber',
        #                Weight_in_cms = 'Weight',
        #                Height_in_kgs = 'Height',
        #                Profession = 'Profession',
        #                Physician_Name = 'PhysicianName',
        #                Physician_Contact_Number = 'PhysicianContactNumber',
        #                Physician_Address = 'PhysicianAddress',
        #                Last_date_visited_a_physician = 'Lastdatevisitedaphysician',
        #                Last_time_visited_a_physician_other = 'Lasttimevisitedaphysicianother',
        #                How_often_do_you_visit_physician = 'Howoftendoyouvisitphysician',
        #                Smoker = 'Smoker',
        #                Alcohol = 'Alcohol',
        #                Stress = 'Stress',
        #                Exercise = 'Exercise',
        #                How_would_you_rate_your_diet = 'Howwouldyourateyourdiet',
        #                How_would_you_rate_your_sleep = 'Howwouldyourateyoursleep',
        #                Diet = 'Diet',
        #                Ayurveda = 'Ayurveda',
        #                Meditation = 'Meditation',
        #                Yoga = 'Yoga',
        #                Workout_sessions = 'Workoutsessions',
        #                Walking_or_Jogging = 'WalkingorJogging',
        #                Other_Please_list = 'OtherPleaselist'
        #            WHERE
        #                Patient_ID = 'PatientID'"""

        mycursor = mydb.cursor()
        mycursor.execute("""
            UPDATE patient
            SET First_Name=%s, Family_Name=%s, Date_Of_Birth=%s, Gender=%s, Phone_Number=%s, WhatsApp_Number=%s, Email=%s, Address=%s, Emergency_Contact=%s, Emergency_Contact_Number=%s, Weight_in_cms=%s, Height_in_kgs=%s, Profession=%s, Physician_Name=%s, Physician_Contact_Number=%s, Physician_Address=%s, Last_date_visited_a_physician=%s, Last_time_visited_a_physician_other=%s, How_often_do_you_visit_physician=%s, Smoker=%s, Alcohol=%s, Stress=%s, Exercise=%s, How_would_you_rate_your_diet=%s, How_would_you_rate_your_sleep=%s, Diet=%s, Ayurveda=%s, Meditation=%s, Yoga=%s, Workout_sessions=%s, Walking_or_Jogging=%s, Other_Please_list=%s
            WHERE Patient_ID=%s
        """, (FirstName, FamilyName, DateOfBirth, Gender, PhoneNumber, WhatsAppNumber, Email, Address, EmergencyContact, EmergencyContactNumber, Weight, Height, Profession, PhysicianName, PhysicianContactNumber, PhysicianAddress, Lastdatevisitedaphysician, Lasttimevisitedaphysicianother, Howoftendoyouvisitphysician, Smoker, Alcohol, Stress, Exercise, Howwouldyourateyourdiet, Howwouldyourateyoursleep, Diet, Ayurveda, Meditation, Yoga, Workoutsessions, WalkingorJogging, OtherPleaselist, PatientID))


        # mycursor.execute("UPDATE patient SET First_Name=%s, Family_Name=%s, Date_Of_Birth=%s, Gender=%s, Phone_Number=%s, WhatsApp_Number=%s, Email=%s, Address=%s, Emergency_Contact=%s, Emergency_Contact_Number=%s, Weight_in_cms=%s, Height_in_kgs=%s, Profession=%s, Physician_Name=%s, Physician_Contact_Number=%s, Physician_Address=%s, Last_date_visited_a_physician=%s, Last_time_visited_a_physician_other=%s, How_often_do_you_visit_physician=%s, Smoker=%s, Alcohol=%s, Stress=%s, Exercise=%s, How_would_you_rate_your_diet=%s, How_would_you_rate_your_sleep=%s, Diet=%s, Ayurveda=%s, Meditation=%s, Yoga=%s, Workout_sessions=%s, Walking_or_Jogging=%s, Other_Please_list=%s WHERE Patient_ID='%s' " % (FirstName, FamilyName, DateOfBirth, Gender, PhoneNumber, WhatsAppNumber, Email, Address, EmergencyContact, EmergencyContactNumber, Weight, Height, Profession, PhysicianName, PhysicianContactNumber, PhysicianAddress, Lastdatevisitedaphysician, Lasttimevisitedaphysicianother, Howoftendoyouvisitphysician, Smoker, Alcohol, Stress, Exercise, Howwouldyourateyourdiet, Howwouldyourateyoursleep, Diet, Ayurveda, Meditation, Yoga, Workoutsessions, WalkingorJogging, OtherPleaselist, PatientID))
        mydb.commit()


        
        mycursor.close()
        return 'success'
        
    except Error as e:
        print(3, e)
        return("Not done")

@app.route('/patientsmedicine', methods=['POST'])
def medicineedit():
    request_data = json.loads(request.data)
    Cabinet_ID = request_data['Cabinet_ID']
    Medicine_Name = request_data['Medicine_Name']
    Medicine_Dose = request_data['Medicine_Dose']
    Medicine_Time_Day = request_data['Medicine_Time_Day']
    Time_since_prescibed_Value = request_data['Time_since_prescibed_Value']
    Time_since_prescibed_Unit = request_data['Time_since_prescibed_Unit']
    Precription_Remarks = request_data['Precription_Remarks']
    Prescription_Available_YesORNo = request_data['Prescription_Available_YesORNo']

    try: 
        # Connecting with the database
        mydb = connect(host = "localhost",
            user = "aditya",
            password = "",
            database = "pharmacy"
            )

        mycursor = mydb.cursor()
        mycursor.execute("""
            UPDATE Medicine_cabinet
            SET Medicine_Name=%s, Medicine_Dose=%s, Medicine_Time_Day=%s, Time_since_prescibed_Value=%s, Time_since_prescibed_Unit=%s, Precription_Remarks=%s, Prescription_Available_YesORNo=%s
            WHERE Cabinet_ID=%s
        """, (Medicine_Name, Medicine_Dose, Medicine_Time_Day, Time_since_prescibed_Value, Time_since_prescibed_Unit, Precription_Remarks, Prescription_Available_YesORNo, Cabinet_ID))

        mydb.commit()


        
        mycursor.close()
        return 'success'
        
    except Error as e:
        print(3, e)
        return("Not done")

@app.route('/patientandevent', methods=['POST'])
def home3():
    # Getting the input date as the JSON payload
    request_data = json.loads(request.data)
    #Extracting the input date
    PatientID = request_data['PatientID']
    EventID = request_data['EventID']
    

    try: 
        # Connecting with the database
        mydb = connect(host = "localhost",
            user = "aditya",
            password = "",
            database = "pharmacy"
            )

        query = """SELECT *
                   FROM patient
                   WHERE Patient_ID = '{}'""".format(PatientID)

        # query_medicine = """SELECT *
        #                     FROM Medicine_cabinet
        #                     WHERE Patient_ID = '{}'""".format(PatientID)

        query_event = """SELECT *
                         FROM Patient_Event
                         WHERE Event_ID = '{}'""".format(EventID)
        print(query)
        print(1)
        mycursor = mydb.cursor(dictionary=True)

        mycursor.execute(query)

        #Getting the resultant data
        fetchdata = mycursor.fetchall()

        # mycursor.execute(query_medicine)

        # fetchdata_medicine = mycursor.fetchall()
        # print(fetchdata_medicine)
        # print(type(fetchdata_medicine))
 
        mycursor.execute(query_event)

        fetchdata_event = mycursor.fetchall()

        # print(fetchdata_medicine)





        # fetchdata = fetchdata_patient.update(fetchdata_medicine)

        



        json1 = json.dumps(fetchdata)
        json2 = json.dumps(fetchdata_event)
        print(json1)
        print(type(json1))

        mycursor.close()
        # #Returning the data as a dictionary
        dict = {'result':fetchdata,'resultnew':fetchdata_event}
        
        # print(dict)
        return dict
    except Error as e:
        print(3, e)
        return("Not done")

@app.route('/patientseventedit', methods=['POST'])
def edit1():
    request_data = json.loads(request.data)
    Event_ID = request_data['Event_ID']
    Event_notes = request_data['Event_notes']
    Event_Status = request_data['Event_Status']

    try: 
#         # Connecting with the database
        mydb = connect(host = "localhost",
            user = "aditya",
            password = "",
            database = "pharmacy"
            )

        mycursor = mydb.cursor()

        mycursor.execute("""
            UPDATE Patient_Event 
            SET Event_notes=%s, Event_Status=%s
            WHERE Event_ID=%s
            """, (Event_notes, Event_Status, Event_ID))     

        

        
        
        mydb.commit()


        
        mycursor.close()
        return 'success'
        
    except Error as e:
        print(3, e)
        return("Not done")

@app.route('/patientseventadd', methods=['POST'])
def eventadd():
    request_data = json.loads(request.data)
    Patient_ID = request_data['Patient_ID']
    Next_Event_Type = request_data['Next_Event_Type']
    Next_Event_Description = request_data['Next_Event_Description']
    Next_Event_Date = request_data['Next_Event_Date']
    Prep_Notes_Next_Event = request_data['Prep_Notes_Next_Event']

    try: 
        # Connecting with the database
        mydb = connect(host = "localhost",
            user = "aditya",
            password = "",
            database = "pharmacy"
            )

        mycursor = mydb.cursor()
        mycursor.execute("INSERT INTO Patient_Event(Patient_ID, Event_date, Event_details, Event_type) VALUES(%s, %s, %s, %s)",(Patient_ID, Next_Event_Date, Next_Event_Description, Next_Event_Type))

        mydb.commit()


        
        mycursor.close()
        return 'success'
        
    except Error as e:
        print(3, e)
        return("Not done")





if __name__ == "__main__":

    app.run(debug=True)


# from flask import Flask
# app = Flask(__name__)

# @app.route('/')
# def hello_world():
#     return 'Hello, World!'