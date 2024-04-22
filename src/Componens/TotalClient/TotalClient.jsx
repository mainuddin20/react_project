import React, { Component ,Fragment,} from 'react';
import {Container,Row,Col, Card,} from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { IoShieldCheckmarkSharp } from "react-icons/io5";

class TotalClient extends Component {
      render() {
            return (
                  <Fragment>

                        <Container fluid className='TopClient p-0 mt-5 '>
                        <div className='TopOverlay'>
                        <Container >
                              <Row >

                              
                                    <section className='total'>
                                    
                                    <Col lg={4} md={6} sm={6} className='text-center'>


                                          <h1>
                                          <CountUp start={0} end={1000}>
                                                {({ countUpRef, start }) => (
                                                <div>

                                                      <VisibilitySensor onChange={start}>
                                                      <span ref={countUpRef} />
                                                      </VisibilitySensor>
                                                      
                                                      
                                                </div>
                                                )}
                                          </CountUp>
                                          </h1>
                                          <h2>
                                                TOTAL PROJECTS
                                          </h2>



                                    </Col>
                                    <Col g={4} md={6} sm={6} className='text-center'>


                                          <h1>
                                          <CountUp start={0} end={1000}>
                                                {({ countUpRef, start }) => (
                                                <div>

                                                      <VisibilitySensor onChange={start}>
                                                      <span ref={countUpRef} />
                                                      </VisibilitySensor>
                                                      
                                                      
                                                </div>
                                                )}
                                          </CountUp>
                                          </h1>
                                          <h2>
                                                TOTAL CLIENT
                                          </h2>
                                    
                                    
                                    
                                    </Col>
                                    




                                    
                                    <Col lg={4} md={12} sm={12} className='right'>

                                    <Card style={{ width: '12rem' }}>
                                          <Card.Body>
                                          <Card.Title className='text-center'>How i Work</Card.Title>
                                          {/* <Card.Subtitle className=" text-muted">Card Subtitle</Card.Subtitle> */}
                                          <Card.Text>
                                         <p className='pagetac'> <IoShieldCheckmarkSharp className='iconcolor' /> Requirement Gathering </p>
                                         <p className='pagetac'> <IoShieldCheckmarkSharp className='iconcolor' /> Sistem Analysis </p>
                                         <p className='pagetac'> <IoShieldCheckmarkSharp className='iconcolor' /> Coding Testing </p>
                                         <p className='pagetac'> <IoShieldCheckmarkSharp className='iconcolor' /> Implementation </p>

                                          </Card.Text>
                                          
                                         
                                          </Card.Body>
                                    </Card>

                                                
                                    </Col>
                                    
                              
                                    </section>
                              

                              </Row>
                              
                            
                        </Container>
                        </div>
                             
                        </Container>   
                        
                  </Fragment>
            );
      }
}

export default TotalClient;