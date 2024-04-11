import React, { Component, Fragment } from 'react';
import {Container, Row, } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import project from '../asset/images/project.jpg';
import icon3 from '../../asset/images/icon3.jpeg';

class ClientSays extends Component {
      render() {
            return (
                  <Fragment>

                        <Container>
                              <Row>
                              <Carousel className="owl-carousel owl-theme">
                                    <div>
                                         <img src={icon3} alt='' style={{ width: '10rem' }}></img>
                                          <h1> Web Designer</h1>
                                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur nemo omnis accusantium fugit eligendi veritatis aliquid vitae illum. Fugit, temporibus.</p>
                                    </div>

                                    <div>
                                         <img src={icon3} alt='' style={{ width: '10rem' }}></img>
                                          <h1> Web Designer</h1>
                                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur nemo omnis accusantium fugit eligendi veritatis aliquid vitae illum. Fugit, temporibus.</p>
                                    </div>

                                    <div>
                                         <img src={icon3} alt='' style={{ width: '10rem' }}></img>
                                          <h1> Web Designer</h1>
                                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur nemo omnis accusantium fugit eligendi veritatis aliquid vitae illum. Fugit, temporibus.</p>
                                    </div>

                                    <div>
                                         <img src={icon3} alt='' style={{ width: '10rem' }}></img>
                                          <h1> Web Designer</h1>
                                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur nemo omnis accusantium fugit eligendi veritatis aliquid vitae illum. Fugit, temporibus.</p>
                                    </div>
                                    
                              </Carousel>
                              </Row>
                        </Container>
                        
                  </Fragment>
            );
      }
}

export default ClientSays;