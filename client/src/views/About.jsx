import React from 'react';
import {Link} from 'react-router-dom';


const About = () => {

    return (
        <>
            <div className='container d-block mx-auto w-50 my-3 p-3' >
                <h2>Meet the Team</h2>
                <div className='container card img-size'>
                    <img src={process.env.PUBLIC_URL + '/selfie.jpg'} class="rounded img-fluid" alt="vanessa-emerick"/>
                        <div className='card-title'>
                            <p>Evelyn Emerick, Artist</p>
                        </div>
                    <div className='card-body'>
                        <p>Graduate of </p>
                    </div>
                </div>
                <div className='container card img-size'>
                    <img src={process.env.PUBLIC_URL + '/selfie2.jpg'} class="rounded img-fluid" alt="evelyn-emerick"/>
                        <div className='card-title'>
                            <p>Evelyn Emerick, Programmer</p>
                        </div>
                    <div className='card-body'>
                        <p>Graduate of </p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default About