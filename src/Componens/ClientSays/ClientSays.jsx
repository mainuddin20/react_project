import React, { Component, Fragment } from 'react';
import {Col, Container, Row, } from 'react-bootstrap';
 //import { Carousel } from 'react-responsive-carousel';
 //import "react-responsive-carousel/lib/styles/carousel.min.css";
 import icon1 from '../../asset/images/icon1.jpeg';
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  Slider  from 'react-slick';




class ClientSays extends Component {
      render() {





            
            var settings = {
              autoplay: true,
              autoplaySpeed: 3000,
                  dots: true,
                  infinite: true,
                  speed: 3000,
                  
                  vartical:true,
                  varticalSwiping:true,
                  slidesToShow: 1,
                  slidesToScroll:1,
                  responsive: [
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1,
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
                };

            return (
                  <Fragment>

                        <Container>
                        
                              <Row className='row'>

                              <h1 className='text-center m-4 text-primary text-uppercase'>CLIENT SEAS</h1>
                                <Slider {...settings}>


                                    <Col className='text-center'>
                                          
                                          <img src={icon1} alt="" className='imagescenter mt-5 '/>
                                          <h2>Web Development</h2>
                                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, minus.</p>

                                    </Col>

                                    <Col className='text-center'>
                                          
                                          <img src={icon1} alt="" className='imagescenter mt-5 '/>
                                          <h2>Web Development</h2>
                                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, minus.</p>

                                    </Col>

                                    <Col className='text-center'>
                                          
                                          <img src={icon1} alt="" className='imagescenter mt-5 '/>
                                          <h2>Web Development</h2>
                                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, minus.</p>

                                    </Col>

                                    <Col className='text-center'>
                                          
                                          <img src={icon1} alt="" className='imagescenter mt-5 '/>
                                          <h2>Web Development</h2>
                                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, minus.</p>

                                    </Col>
                                  </Slider>


                              
                              </Row>
                             
                        </Container>
                        
                  </Fragment>
            );
      }
}

export default ClientSays;