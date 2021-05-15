import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const CarouselSubject = ({
    title = '',
    className = ""
}) => {

    return (
        <>
            <div class="container mt-5">
            <div class="mb-4">
                <h3 className={className} style={{ fontWeight: '800' }}><i class="far fa-star pr-2 " style={{color: '#dbd51f'}}></i>{title}</h3>
                </div>
                
                <div class="row">
                    <div class="col-md-4 col-12">
                        <div class="card">
                            <img class="card-img-top img-fluid" src="assets\images\gallery\9.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </p>
                                <p class="card-text">
                                    <div className="row">
                                        <div className="col-6">
                                    <small class="text-muted">120 giờ</small>
                                        </div>
                                        <div className="col-6">
                                            <button style={{display:'block', color:'#555'}} className="btn btn-block"> Xem thêm</button>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-12">
                        <div class="card">
                            <img class="card-img-top img-fluid" src="assets\images\gallery\9.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </p>
                                <p class="card-text">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-12">
                        <div class="card">
                            <img class="card-img-top img-fluid" src="assets\images\gallery\9.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </p>
                                <p class="card-text">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-12">
                        <div class="card">
                            <img class="card-img-top img-fluid" src="assets\images\gallery\9.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </p>
                                <p class="card-text">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-12">
                        <div class="card">
                            <img class="card-img-top img-fluid" src="assets\images\gallery\9.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </p>
                                <p class="card-text">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-12">
                        <div class="card">
                            <img class="card-img-top img-fluid" src="assets\images\gallery\9.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </p>
                                <p class="card-text">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
               

            </div>
        </>
    );
}