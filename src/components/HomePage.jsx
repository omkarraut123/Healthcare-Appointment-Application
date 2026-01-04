import React, { useState } from 'react'
import SearchDoctor from './SearchDoctor';
import AvailableDoctors from './AvailableDoctors';
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
function HomePage() {
    
    
    return (
        <>
       <main>
        <SearchDoctor />   
        <AvailableDoctors doctors = {availableDoctors} />    
       </main>
        </>
    )
}

export default HomePage
