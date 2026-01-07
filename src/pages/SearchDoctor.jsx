import React, { useState } from 'react'
import AvailableDoctors from './AvailableDoctors';
import doctors from '../doctors';
const specialities = [
  "General Physician",
  "Cardiology",
  "Dermatology",
  "Orthopedic",
  "Neurology",
  "Pediatrics",
  "Gynecology",
  "ENT",
  "Ophthalmology",
  "Psychiatry",
  "Dentistry",
  "Urology",
  "Gastroenterology",
  "Pulmonology",
  "Nephrology",
  "Endocrinology",
  "Rheumatology",
  "Oncology",
  "Radiology",
  "Anesthesiology"
];
const availableDoctors = [
  {
    id: 1,
    name: "Dr. Amit Sharma",
    image: "/doctors/amit-sharma.png",
    speciality: "Cardiology",
    experience: 10, 
    rating: 4.8,
  },
  {
    id: 2,
    name: "Dr. Neha Verma",
    image: "/doctors/neha-verma.png",
    speciality: "Dermatology",
    experience: 7,
    rating: 4.6,
  },
  {
    id: 3,
    name: "Dr. Rahul Mehta",
    image: "/doctors/rahul-mehta.png",
    speciality: "Orthopedics",
    experience: 12,
    rating: 4.9,
  },
  {
    id: 4,
    name: "Dr. Pooja Kulkarni",
    image: "/doctors/pooja-kulkarni.png",
    speciality: "Gynecology",
    experience: 9,
    rating: 4.7,
  },
  {
    id: 5,
    name: "Dr. Suresh Iyer",
    image: "/doctors/suresh-iyer.png",
    speciality: "Neurology",
    experience: 15,
    rating: 4.8,
  },
];

function SearchDoctor() {
    const [speciality, setSpeciality] = useState('');
    const searchedDoctors = speciality !== "" ? doctors.filter((doctor) => doctor.speciality === speciality) : availableDoctors;
    return (
        <>
        <section className='section-homepage'>
            <div className='speciality-container'>
                <h2>Find the Right Doctor for Your Health Needs</h2>
                <div className="speciality-container-dropdown">
                    <select className="speciality-dropdown" id='speciality' name='speciality' onChange={(e) => setSpeciality(e.target.value)} defaultValue="">
                        <option disabled value="" title='Select Speciality'>Select Speciality</option>
                        {
                            specialities.map((item, index) => (
                                <option key={index} value={item} title={item}>{item}</option>
                            ))
                        }
                        
                    </select>
                </div>
            <div className='speciality-container-text'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
<path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
</svg>
                </span>
                <p>Select a speciality to view available doctors</p>
            </div>

            </div>
        </section>
        <AvailableDoctors doctors = {searchedDoctors} />

        </>
    )
}

export default SearchDoctor
