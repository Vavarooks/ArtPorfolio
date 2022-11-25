import React from 'react';
import {Link} from 'react-router-dom';


const About = () => {

    return (
        <>
            <div className='container d-block mx-auto w-50 my-3 p-3' >
                <h2>Meet the Team</h2>
                <div>
                    <img src="..." class="rounded" alt="..."/>
                    <p>Evelyn Emerick, Artist</p>
                    <p>Graduate of Art Academy</p>
                    <p>My Sister :0</p>
                </div>
                <div>
                    <img src="..." class="rounded" alt="..."/>
                    <p>Vanessa Emerick, Programmer</p>
                    <p>Graduate of UC Extention Coding Program</p>
                    <p>Graduate of Sunnyvale Coding Dojo Program</p>
                </div>
            </div>
        </>
    )

}

export default About