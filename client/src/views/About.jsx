import React from 'react';
import {Link} from 'react-router-dom';


const About = () => {

    return (
        <>
            <div className='container d-block mx-auto w-50 my-3 p-3' >
                <h2>Meet the Team</h2>
                <div className='container card img-size'>
                    <img src={process.env.PUBLIC_URL + '/images/selfie.jpg'} class="rounded img-fluid" alt="vanessa-emerick"/>
                        <div className='card-title'>
                            <p>Vanessa Emerick, Programmer</p>
                        </div>
                    <div className='card-body'>
                        <p>Graduate of Coding Dojo</p>
                        <p>Graduate of UC Berkley Extention Coding Program</p>
                        <p>About me: I have been programming for many years now. Over 10,000 hours plus.
                            My dream is to one day make my own game so I can deliver joy to the world.
                        </p>
                    </div>
                </div>
                <div className='container card img-size'>
                    <img src={process.env.PUBLIC_URL + '/images/selfie2.jpg'} class="rounded img-fluid" alt="evelyn-emerick"/>
                        <div className='card-title'>
                            <p>Evelyn Emerick, Artist</p>
                        </div>
                    <div className='card-body'>
                        <p>Graduate of Art Academy</p>
                        <p>About me: I have been drawing for as long as I can remember. I started going to art school because I to want to create art for a living. 
                            My dream is to give others the same feelings I have through my works. I want to inspire others who love art to draw themselves.
                            My current goal is just to help make compelling environments to have other say that would it is beautiful</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default About