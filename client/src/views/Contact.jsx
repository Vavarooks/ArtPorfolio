import React from 'react';
import { Link } from 'react-router-dom';


const Contact = () => {

    return (
        <>
            <div className='container d-block mx-auto w-50 my-3 p-3' >
                <h1>Contact</h1>
                <form method="post" action="mailto:youremail@youremail.com">
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea className="form-control" rows="3"></textarea>
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </>
    )

}

export default Contact