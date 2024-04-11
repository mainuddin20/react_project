import React, { Component, Fragment } from 'react';
import {Container, Row, Col,Card } from 'react-bootstrap';
import project  from '../../asset/images/project.jpg';

class OurCourse extends Component {
      render() {
            return (
                  <Fragment>

                        <Container>

                              <Row>
                                    <Col >
                                          
                                          
                                          
                                          <Container >
                                          



                                          <Col className="cardd mt-5 mb-3 disply" lg={6} md={6} sm={12}>
                                                <div class="row g-0">
                                                <div class="col-md-4">
                                                      <img src={project} class="img-fluid rounded-start" alt="...">
                                                      </img>
                                                </div>
                                                <div class="col-md-8">
                                                      <div class="card-body">
                                                      <h5 class="card-title">Web development</h5>
                                                      <p class="card-text">This is a wider card with supporting text  </p>

                                                      
                                                      <Card.Link href="#" className='butto'>Details</Card.Link>
                                                     
    

                                                      </div>
                                                      
                                                
                                                      
                                                </div>
                                                </div>
                                          </Col>

                                          <Col className="cardd mb-3 disply" lg={6} md={6} sm={12}>
                                                <div class="row g-0">
                                                <div class="col-md-4">
                                                      <img src={project} class="img-fluid rounded-start" alt="...">
                                                      </img>
                                                </div>
                                                <div class="col-md-8">
                                                <div class="card-body">
                                                      <h5 class="card-title">Web development</h5>
                                                      <p class="card-text">This is a wider card with supporting text  </p>

                                                      
                                                      <Card.Link href="#" className='butto'>Details</Card.Link>
                                                     
    

                                                      </div>
                                                </div>
                                                </div>
                                          </Col>

                                          <Col className="cardd mb-3 disply" lg={6} md={6} sm={12}>
                                                <div class="row g-0">
                                                <div class="col-md-4">
                                                      <img src={project} class="img-fluid rounded-start" alt="...">
                                                      </img>
                                                </div>
                                                <div class="col-md-8">
                                                <div class="card-body">
                                                      <h5 class="card-title">Web development</h5>
                                                      <p class="card-text">This is a wider card with supporting text  </p>

                                                      
                                                      <Card.Link href="#" className='butto'>Details</Card.Link>
                                                     
    

                                                      </div>
                                                </div>
                                                </div>
                                          </Col>

                                          <Col className="cardd mb-3 disply" lg={6} md={6} sm={12}>
                                                <div class="row g-0">
                                                <div class="col-md-4">
                                                      <img src={project} class="img-fluid rounded-start" alt="...">
                                                      </img>
                                                </div>
                                                <div class="col-md-8">
                                                <div class="card-body">
                                                      <h5 class="card-title">Web development</h5>
                                                      <p class="card-text">This is a wider card with supporting text  </p>

                                                      
                                                      <Card.Link href="#" className='butto'>Details</Card.Link>
                                                     
    

                                                      </div>
                                                </div>
                                                </div>
                                          </Col>
                                          
                                          </Container>
                                          
                                    </Col>
                              </Row>

                        </Container>
                        
                  </Fragment>
            );
      }
}

export default OurCourse;