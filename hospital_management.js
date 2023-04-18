var hospital_model = {
    hospital_details :{
                  name: "ADVAITHA HOSPITALs",
                  regno: 0024521,
                  address: "20/8 street tenkasi",
                  pincode: 624814,
                  contactno: 01234567,
                  mailid: "advaithahospitals@gmail.com",
                  website: "www.advaitha.hospitals.in"
                  },

        departments : ["Anesthesiology","diabetiscare","surgery","ENT","cardiology","radiology","neurology"],

        staffs : ["doctors","nurse","other staffs"],

          doctors:
                    [{name:"Advaitha",
                    age: 26,
                    qualifications: "MBBS Generalmedicine",
                    dutytime: "5:30amto 5:30pm"},

                    {name:"Pranav",
                     age:  32,
                     qualifications: "MBBS.MD",
                     specialist: "cardiology",
                     dutytime: "12:00pm to 2:00pm"}],
            nurse: 
                    [{name:"priya",
                    age: 32,
                    qualification: "Msc nursing",
                    designation: "head nurse",
                    dutytime: "9am to 9pm"},

                    {name:"anu",
                     age: 28,
                    qualification: "Bsc nursing",
                    dutytime:"4pm to 7pm"}],       
                                                
            other_staff: 
                    [{name:"midhula",
                    age: 23,
                    designation: "receptionist",
                    dutytime: "9am to 6pm",
                    work:("booking-appointments","check doctors's availability")},
                       
                    {name:"vedhanth",
                    age: 29,
                    designation: "lab technision",
                    qualification: "diploma in medical laboratory",
                    dutytime: "4pm to 7pm"},
                
                    {name:"kishore",
                     age:45,
                     designation:"radiologist",
                     qualification: "diploma in radiology",
                     dutytime:"11am to 2pm"}
          ]}
        
        rooms: ["consultant-room", "patient-room", "staff-room", "operation-theatre","pharmacy", "lab", "scanning-room"]

        patient ["inpatient","outpatient"]
              {inpatient:[
                    {name:"aadhi",
                    id:1,
                    age:46,
                    disease: "cardiac attack",                 
                    doctor: "dr.pranav, cardiologist",
                    nurse: "priya",
                    insurance: "yes/no",
                    visitortime: "4pm to 6pm"},
                    
                    {name:"anju",
                     id:2,
                     age:65,
                     disease:["diabetis","cardiac-attack"],
                     consultingdoctor: ["dr.advaitha", "dr.pranav"],                  
                     nurse: "priya",
                     visitortime:"4pm to 6pm"},
                ]
                     
            outpatient:

                    [{name:"murali",
                    tokenno: 34,
                    age:54,
                    contact_number: 9790366011,
                    illness: "fever",
                    consulting_doctor: "advaitha,general physhician"},
                    
                    {name:"fathima",
                    tokentno:78,
                    age: 45,
                    contact_number:9787493884,
                    illness: "hand fracture",
                    consultingdoctor:"dr.jeeva ortho",
                    nurse: "anu"}
                    
                ]
        }
                    
