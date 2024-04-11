import React, { Component, Fragment } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
// import { FaFacebook } from "react-icons/fa";

class Footer extends Component {
      render() {
            return (
                  <Fragment>

                        <Container>

                              <Row className='text-center'>

                                    <Col lg={3} md={6} sm={12}>

                                          <h1> Follow Me </h1>
                                          <p>{/* <FaFacebook /> */} </p>
                                          

                                    </Col>
                                    <Col lg={3} md={6} sm={12}>

                                          <h1> Address </h1>
                                          <p> </p>
                                          

                                    </Col>
                                    <Col lg={3} md={6} sm={12}>

                                          <h1> Information  </h1>
                                          <p> About me  </p>
                                          <p> Resume  </p>
                                          <p> Contact  </p>
                                          

                                    </Col>
                                    <Col lg={3} md={6} sm={12}>

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