import React from 'react'
import { Card, Button } from 'react-bootstrap'

function AvailableDoctors({doctors}) {
    return (
        <>
        <section className='doctors-listing-container'>
        <ul>
        {
            doctors.map((doctor) => {
                return <li key={doctor.id}>
                    <Card >
            <Card.Body>                
                <img src='/doctoricon.svg' alt='doctor image' width='60' height='60'/>
                    <div>
                        <p>{doctor.name}</p>
                        <span>{doctor.speciality}</span>
                        <span>{doctor.experience} years of Experience</span>
                    </div>
                    <div>
                        <Button variant='secondary' size='sm'>View Profile</Button>
                        <Button variant='secondary' size='sm'>Book Appointment</Button>
                    </div>
              
            </Card.Body>
        </Card>
                </li>
            })
        }
        </ul>
        </section>
        </>
    )
}

export default AvailableDoctors
