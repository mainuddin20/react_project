import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, } from 'react-bootstrap';
import icon1 from '../../asset/images/icon1.jpeg';
import icon2 from '../../asset/images/icon2.jpeg';
import icon3 from '../../asset/images/icon3.jpeg';

class OurSeervice extends Component {
    render() {
        return (
            <Fragment>
                <Container className='service'>
                    <h1 className='text-center mt-5 text-primary text-uppercase'>Our Service</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>

                            <Card className='card mt-5'>
                               <img src={icon1} alt="" className='img mt-3'/> 
                                <Card.Body className='text-center'>
                                    <Card.Title>Web Development</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>

                        </Col> 




                        <Col lg={4} md={6} sm={12}>
                            <Card className=' card mt-5'>
                                    <img src={icon3} alt="" className='img mt-3 '/> 
                                <Card.Body className='text-center'>
                                    <Card.Title>Mobile Development</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>


                        </Col>





                        <Col lg={4} md={6} sm={12}>

                            <Card className='card mt-5'>
                            <img src={icon2} alt=""  className='img mt-3 '/> 
                                <Card.Body className='text-center'>
                                    <Card.Title>Graphics Design</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>

                        </Col>



                    </Row>




                </Container>



            </Fragment>
        );
    }
}

export default OurSeervice;