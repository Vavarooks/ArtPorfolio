import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {

    return (
        <>

            <div className='container d-block mx-auto w-50 my-3 p-3' >
                <h1>Featured Items</h1>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={process.env.PUBLIC_URL + '/frog-pirate.jpg'} className="d-block w-100 img-fluid" alt="frog-pirate" />
                        </div>
                        <div className="carousel-item">
                            <img src={process.env.PUBLIC_URL + '/advance-perspective.jpg'} className="d-block w-100 img-fluid" alt="advanced-perspective" />
                        </div>
                        <div className="carousel-item">
                            <img src={process.env.PUBLIC_URL + '/vehicle-armor-design.jpg'} className="d-block w-100 img-fluid" alt="vehicle-armor-design" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-selling-tab" data-bs-toggle="tab" data-bs-target="#nav-selling" type="button" role="tab" aria-controls="nav-selling" aria-selected="true">selling</button>
                        <button className="nav-link" id="nav-digital-tab" data-bs-toggle="tab" data-bs-target="#nav-digital" type="button" role="tab" aria-controls="nav-digital" aria-selected="false">digital</button>
                        <button className="nav-link" id="nav-traditional-tab" data-bs-toggle="tab" data-bs-target="#nav-traditional" type="button" role="tab" aria-controls="nav-traditional" aria-selected="false">traditional</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-selling" role="tabpanel" aria-labelledby="nav-selling-tab" tabindex="0">
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            <div className="col">
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + '/wizard-design.jpg'} className="card-img-top img-fluid" alt="wizard-design" />
                                    <div className="card-body">
                                        <h5 className="card-title">Character Design</h5>
                                        <p className="card-text">Simple mach-up of your character. Price: 15$ or more if you want extra details.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + '/muse-design.jpg'} className="card-img-top img-fluid" alt="muse-design" />
                                    <div className="card-body">
                                        <h5 className="card-title">Detailed Character Design</h5>
                                        <p className="card-text">Detailed character design. Price: 15$ or more if you want more details.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + '/girl-cup.jpg'} className="card-img-top img-fluid" alt="girl-cup" />
                                    <div className="card-body">
                                        <h5 className="card-title">Single Character</h5>
                                        <p className="card-text">Detailed digital drawing of your character. Price: 20$ or more if you want a background or more details.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + '/genshin-fanart.jpg'} className="card-img-top img-fluid" alt="magical-girl" />
                                    <div className="card-body">
                                        <h5 className="card-title">Large Full Body Character</h5>
                                        <p className="card-text">Detailed digital drawing of your character. Price: 25$ or more if you want a background or more detail.</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-digital" role="tabpanel" aria-labelledby="nav-digital-tab" tabindex="0">
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            <div className="col">
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + '/photobash-dragon.jpg'} className="card-img-top img-fluid" alt="photobash-dragon" />
                                    <div className="card-body">
                                        <h5 className="card-title">Photobash Dragon</h5>
                                        <p className="card-text">Based on Genshin Impact</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + '/photobash-fight.jpg'} className="card-img-top img-fluid" alt="photobash-fight" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Description This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src="..." className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Description</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src="..." className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Description This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-traditional" role="tabpanel" aria-labelledby="nav-traditional-tab" tabindex="0">
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            <div className="col">
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + '/advance-perspective.jpg'} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Description This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + '/frog-pirate.jpg'} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Description This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src="..." className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Description</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src="..." className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Description This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Main