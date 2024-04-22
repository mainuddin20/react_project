import React, { Component, Fragment } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

class Footer extends Component {
      render() {
            return (
                  <Fragment>

                        <Container>

                              <Row className='footer   '>

                                    <Col lg={3} md={6} sm={12}>

                                          <h1> Follow Me </h1>
                                          {/* <p className='pagetac'> <FaFacebook  className='icon' /> Requirement Gathering </p> */}
                                         
                                         <p className='pagetac'><a href="https://www.facebook.com/itexpertmainud"> <FaFacebook  className='icon' /> </a>Requirement Gathering </p>

                                         <p className='pagetac'> <a href="https://www.youtube.com/@pet_lover_bangladesh"> <FaYoutube  className='icon' /> </a> Sistem Analysis </p>
                                          

                                    </Col>
                                    <Col lg={3} md={6} sm={12} className='text-center'>

                                          <h1> Address </h1>
                                          <p> </p>
                                          

                                    </Col>
                                    <Col lg={3} md={6} sm={12} className='text-center'>

                                          <h1> Information  </h1>
                                          <p> About me  </p>
                                          <p> Resume  </p>
                                          <p> Contact  </p>
                                          

                                    </Col>
                                    <Col lg={3} md={6} sm={12} className='ligel'>

                                          <h1> Legal </h1>
                                          <p> Refund policy </p>
                                          <p> Terms and Condition  </p>
                                          <p> privacy policy  </p>
                                          

                                    </Col>

                              </Row>

                        </Container>
                        
                  </Fragment>
            );
      }
}

export default Footer;